<template>
  <footer>
    <section class="py-16 mx-auto xl:container flex justify-around items-center">
      <article class="flex flex-col gap-3">
        <img :src="logoPath" alt="SM | sensei media" class="h-[70px]">
        <p class="flex flex-col underline leading-5">
          <span>Политика</span>
          <span>конфиденциальности</span>
        </p>
      </article>
      <article
        v-for="group in linkGroups"
        :key="group.title"
        class="flex flex-col gap-3"
      >
        <h4 class="font-semibold uppercase">{{ group.title }}</h4>
        <ul>
          <li v-for="link in group.links" :key="link.label">
            <a :href="link.ref" class="leading-9">{{ link.label }}</a>
          </li>
        </ul>
      </article>
    </section>
    <section class="text-sm text-white-50 bg-gray-50 leading-9 text-center">
      © 2021 Все права защиены
    </section>
  </footer>
</template>

<script setup lang="ts">
const logoPath = '../../src/shared/img/main-logo.png';

const linkGroups = [
  {
    title: 'Информация',
    links: [
      {
        label: 'Главная',
        ref: '',
      },
      {
        label: 'Услуги',
        ref: '',
      },
      {
        label: 'Наши работы',
        ref: '',
      },
      {
        label: 'Контакты',
        ref: '',
      },
    ]
  },
  {
    title: 'Услуги',
    links: [
      {
        label: 'Реклама в интернете',
        ref: '',
      },
      {
        label: 'Дизайн вывесок и рекламы',
        ref: '',
      },
      {
        label: 'Дизайн сайтов на Тильде',
        ref: '',
      },
      {
        label: 'СММ',
        ref: '',
      },
    ]
  },
];
</script>