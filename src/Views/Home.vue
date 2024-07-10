<template>
  <div class="p-5">
    <p class="uppercase">todo list</p>
    <div class="w-1/2">
      <div class="flex gap-3">
        <input placeholder="Add Item.." type="text" v-model="itemToAdd" />
        <button
          @click="addItemsToList"
          class="py-3 px-5 text-bold bg-blue-400 rounded-lg text-white"
        >
          Add
        </button>
      </div>

      <!--Alert modal-->
      <div
        v-if="isEditButtonClicked"
        class="absolute top-4 w-1/3 bg-white left-1/2 -translate-x-1/2 p-5 rounded-lg border border-gray-20"
      >
        <p class="mb-3">Edit the Todo:</p>
        <input type="text" v-model="editedText" />
        <div class="mt-3 text-right">
          <button
            @click="handleOkEditAction()"
            class="py-1 px-6 text-bold bg-red-400 rounded-lg text-white mr-2"
          >
            Ok
          </button>
          <button
            @click="handleCancelEditAction"
            class="py-1 px-6 text-bold bg-gray-400 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      </div>

      <!--Todo Table-->
      <table class="mt-5">
        <tr class="bg-blue-300">
          <th>Task</th>
          <th>Actions</th>
        </tr>
        <tr v-for="(item, index) in arrOfTodoItem.itemList" :key="index">
          <td class="relative">
            <span
              :class="{
                'before:absolute before:top-1/2 before:left-2 before:transform before:-translate-y-1/2 before:h-0.5 before:bg-black before:w-20':
                  item.completed,
              }"
              >{{ item.task }}</span
            >
          </td>
          <td>
            <div class="flex gap-2">
              <button
                @click="handleCompleteAction(index)"
                class="bg-green-500 text-white px-2 py-1 rounded"
              >
                {{ item.completed ? "Undo" : "Complete" }}
              </button>
              <button
                @click="handleEditAction(index)"
                class="bg-purple-400 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                @click="handleDeleteAction(index)"
                class="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

const itemToAdd = ref("");
const editedText = ref("");
const itemIndex = ref();
const isEditButtonClicked = ref(false);
const arrOfTodoItem = ref({
  itemList: [{ task: "", completed: false }],
});

const addItemsToList = () => {
  if (itemToAdd.value !== "" && itemToAdd.value.trim() !== "") {
    arrOfTodoItem.value.itemList.push({
      task: itemToAdd.value,
      completed: false,
    });
    itemToAdd.value = "";
    updateLocalStorage();
  }
};

const updateLocalStorage = () => {
  localStorage.setItem(
    "todoItems",
    JSON.stringify(arrOfTodoItem.value.itemList)
  );
};

const handleCompleteAction = (index: number) => {
  arrOfTodoItem.value.itemList[index].completed =
    !arrOfTodoItem.value.itemList[index].completed;
  updateLocalStorage();
};

const handleEditAction = (index: number) => {
  isEditButtonClicked.value = true;
  itemIndex.value = index;
  editedText.value = "";
};

const handleOkEditAction = () => {
  if (editedText.value) {
    arrOfTodoItem.value.itemList[itemIndex.value].task = editedText.value;
  }
  isEditButtonClicked.value = false;
  updateLocalStorage();
};

const handleCancelEditAction = () => {
  isEditButtonClicked.value = false;
};

const handleDeleteAction = (a: any) => {
  arrOfTodoItem.value.itemList.splice(a, 1);
  updateLocalStorage();
};

onMounted(() => {
  const savedItems = localStorage.getItem("todoItems");
  if (savedItems) {
    arrOfTodoItem.value.itemList = JSON.parse(savedItems);
  }
});
</script>
