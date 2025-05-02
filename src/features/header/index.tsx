import { type FC } from 'react';

const logoPath = '../../src/shared/img/main-logo.png';

const links = [
  { label: 'Главная', ref: '' },
  { label: 'Услуги', ref: '#services' },
  { label: 'Наши работы', ref: '#works' },
  { label: 'Контакты', ref: '#footer' },
];

const Header: FC = () => {
  return (
    <header className="sticky top-0 bg-white-50 shadow-3xl">
      <div className="p-2 mx-auto xl:container flex items-center justify-between">
        <img src={logoPath} alt="SM | sensei media" className="h-10 md:h-[70px]" />
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.ref}>
                <a href={link.ref}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <section className="hidden lg:block">
          <button className="px-10 py-3 rounded-xl font-semibold text-white-50 bg-linear-65 from-pink-50 to-purple-50 cursor-pointer">
            Заказать звонок
          </button>
        </section>
        <button className="lg:hidden">
          <div class="flex flex-col justify-between w-6 h-5 cursor-pointer">
            <span class="block h-0.5 bg-gray-50" />
            <span class="block h-0.5 bg-gray-50" />
            <span class="block h-0.5 bg-gray-50" />
          </div>
        </button>
      </div>
    </header>
  );
};

export {Header};
