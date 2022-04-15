import React, { useRef } from "react";
import Layout from "../../components/Layout";
import Image from "next/image";

import MenuHeader from "../../components/menu/menuHeader";
import MenuNavigation from "../../components/menu/menuNavigation";
import MenuItem from "../../components/menu/menuItem";
import menuHero from "../../assets/images/menu/menu_header.jpg";

export default function LocationOne() {
  const tappetizersRef = useRef();
  const pizzaRef = useRef();
  const saladRef = useRef();
  const sandwichRef = useRef();
  const burgersRef = useRef();
  const macRef = useRef();
  const sweetsRef = useRef();

  return (
    <Layout>
      <Image className="-z-10" width={1280} layout="responsive" alt="image of our food" src={menuHero} />
      <div className="flex container mx-auto ">
        <aside className="md:w-1/3 p-12 md:block hidden">
          <MenuNavigation click={() => tappetizersRef.current.scrollIntoView({ behavior: "smooth" })}>
            Tappetizers
          </MenuNavigation>
          <MenuNavigation click={() => pizzaRef.current.scrollIntoView({ behavior: "smooth" })}>
            Artisan Pizza
          </MenuNavigation>
          <MenuNavigation click={() => saladRef.current.scrollIntoView({ behavior: "smooth" })}>Salads</MenuNavigation>
          <MenuNavigation click={() => sandwichRef.current.scrollIntoView({ behavior: "smooth" })}>
            Sandwiches
          </MenuNavigation>
          <MenuNavigation click={() => burgersRef.current.scrollIntoView({ behavior: "smooth" })}>
            Burgers
          </MenuNavigation>
          <MenuNavigation click={() => macRef.current.scrollIntoView({ behavior: "smooth" })}>Mac</MenuNavigation>
          <MenuNavigation click={() => sweetsRef.current.scrollIntoView({ behavior: "smooth" })}>Sweets</MenuNavigation>
        </aside>
        <section className="w-full md:w-3/5 text-center px-8 md:p-0">
          <h1 className="header my-12 text-5xl tracking-[8px] pb-12">Location One</h1>
          <MenuHeader ref={tappetizersRef}>Tappetizers</MenuHeader>
          <MenuItem
            dishName="Garlic fries"
            ingredients="Fresh Garlic, Olive Oil, Parsley, Sea Salt"
            description="Includes Specialty Fries"
            price={8}
          />
          <MenuItem
            dishName="Sweet Potato Fries"
            ingredients="Spicy Arugula Aioli"
            description="Includes Specialty Fries"
            price={9}
          />
          <MenuItem
            dishName="Chilli Cheese fries"
            ingredients="Fries, Santa Maria Tri-tip Chili, Cheese Sauce, Green Onions, Sour Cream"
            description="Includes Specialty Fries"
            price={12}
          />
          <MenuItem dishName="Chips and salsa" price={6} />
          <MenuHeader ref={pizzaRef}>Artisan Pizza</MenuHeader>
          <MenuItem
            dishName="PEPPERONI PIZZA"
            ingredients="House-Made Dough Topped with Marinara Sauce, Pepperoni and Mozzarella Cheese, Baked to Perfection"
            price={13}
          />
          <MenuItem
            dishName="MARGHERITA"
            ingredients="Classic Red Sauce, Central Valley Tomatoes, Fresh Mozzarella Topped with Fresh Basil and Drizzled with 100% Extra Virgin Olive Oil"
            price={13}
          />
          <MenuItem
            dishName="THE ITALIAN"
            ingredients="Classic Red Sauce, Ham, Italian Sausage, Pepperoni, Roasted Mushrooms"
            price={15}
          />
          <MenuItem
            dishName="COWBOY"
            ingredients="Classic Red Sauce, Ham, Italian Sausage, Crumbled Meatball, Pepperoni, Salami, Crushed Red Pepper – Cowboy Up!"
            price={15}
          />
          <MenuItem
            dishName="ISLAND BLAST"
            ingredients="Our House-Made White Sauce, Ham, Roasted Fresh Pineapple, Fresh Jalapeño, Topped with a BBQ Drizzle"
            price={14}
          />
          <MenuItem
            dishName="BBQ CHICKEN"
            ingredients="Our House-Made White Sauce, Fresh Grilled Chicken, Hickory Smoked Bacon, Red Onions, Fresh Cilantro, Topped with BBQ Drizzle"
            price={14}
          />
          <MenuItem
            dishName="PB&amp;J"
            ingredients="Classic Red Sauce, Pepperoni, Smoked Bacon and Fresh Jalapeño"
            price={15}
          />
          <MenuItem
            dishName="CALIFORNIA"
            ingredients="Our House-Made White Sauce, Fresh-Grilled Chicken, Onion, Artichoke Hearts, Spinach, Roasted Green and Yellow Zucchini"
            price={15}
          />
          <MenuItem
            dishName="FARMERS MARKET"
            ingredients="Our House-Made White Sauce, Artichoke Hearts, Fresh Tomato, Onion, Roasted Green and Yellow Zucchini, Mushrooms, Fresh Spinach"
            price={14}
          />
          <MenuItem
            dishName="PROSCIUTTO + ARUGULA"
            ingredients="Garlic Infused Olive Oil, Fresh Mozzarella, Prosciutto, Fresh Arugula and Balsamic Drizzle topped with Shaved Parmesan Cheese"
            price={15}
          />
          <MenuItem
            dishName="FIG + PROSCIUTTO + ARUGULA"
            ingredients="Fig Butter, Mozzarella, Local Calimyrna Figs, Prosciutto, Fresh Arugula, Balsamic Drizzle Topped with Feta Cheese"
            price={15}
          />
          <MenuItem
            dishName="PESTO SHRIMP PIZZA"
            ingredients="White Sauce, Pesto Marinated Shrimp, Sautéed Onions"
            price={16}
          />
          <MenuHeader ref={saladRef}>Salads</MenuHeader>
          <MenuItem
            dishName="TRI-TIP STEAK SALAD"
            ingredients="Tender Steak, Chopped Greens, Red Onion, Tomato, Bleu Cheese Crumbles, Crispy Onion Straws, Ranch Dressing, Balsamic Glaze"
            price={16}
          />
          <MenuItem
            dishName="ASIAN CHICKEN SALAD"
            ingredients="Grilled Chicken, Chopped Greens, Cabbage, Carrots, Mandarin Oranges, Almonds, Sesame Seeds, Asian Sesame Dressing, Crispy Wontons"
            price={14}
          />
          <MenuItem
            dishName="BLAST CHOPPED SALAD"
            ingredients="Grilled Chicken, Bacon, Red Onion, Artichoke Hearts, Tomato, Mozzarella, Ranch Dressing"
            price={14}
          />
          <MenuItem
            dishName="CHICKEN APPLE PECAN SALAD"
            ingredients="Greens, Granny Smith Apples, Candied Pecans, Dried Cranberries, Cranberry Citrus Dressing"
            price={14}
          />
          <MenuItem
            dishName="GRILLED SHRIMP CAESAR SALAD"
            ingredients="Chopped Romaine, Shredded Parmesan, House-Made Croutons, Creamy Caesar Dressing"
            price={16}
          />
          <MenuHeader ref={sandwichRef}>Sandwiches</MenuHeader>
          <MenuItem
            dishName="PHILLY CHEESESTEAK"
            ingredients="Thin Sliced Tri-Tip, Sautéed Peppers, Onions, Mushrooms, Mozzarella, on a Seeded Hoagie Roll"
            price={15}
          />
          <MenuItem
            dishName="GRILLED CHICKEN PESTO"
            ingredients="Grilled Chicken, Bacon, Fresh Mozzarella, Arugula, Tomato, Pesto, Brioche Bun"
            price={15}
          />
          <MenuItem
            dishName="SANTA MARIA TRI-TIP"
            ingredients="Slow Roasted Santa Maria Tri-Tip, Onion Straws, BBQ Sauce, Seeded Hoagie Roll"
            price={15}
          />
          <MenuItem
            dishName="VEGGIE PESTO SANDWICH"
            ingredients="Pesto Marinated Zucchini, Squash, Red Onion, Artichoke Hearts, Tomato, Fresh Mozzarella, Brioche Bun"
            price={13}
          />
          <MenuItem
            dishName="CRISPY CHICKEN SANDWICH"
            ingredients="Hot Honey Glaze, Cabbage, Pickles, Brioche Bun"
            price={13}
          />
          <MenuItem
            dishName="BBQ PULLED PORK"
            ingredients="Hot Honey Glaze, Cabbage, Pickles, Brioche Bun"
            price={15}
          />
          <MenuHeader ref={burgersRef}>Burgers</MenuHeader>
          <MenuItem
            dishName="BLAST BURGERS"
            ingredients="Angus Beef, Caramelized Onions, Cheddar Cheese, Lettuce, Tomato, Pickles, Blast Burger Sauce, Brioche Bun "
            price={14}
          />
          <MenuItem
            dishName="BACON AVOCADO BURGER"
            ingredients="Angus Beef, Bacon, Caramelized Onions, Cheddar Cheese, Avocado, Lettuce, Tomato, Pickles, Blast Burger Sauce, Brioche Bun"
            price={16}
          />
          <MenuItem
            dishName="RODEO BURGER"
            ingredients="Angus Beef, Bacon, Crispy Onion Straws, Cheddar Cheese, BBQ Sauce, Brioche Bun"
            price={17}
          />
          <MenuItem
            dishName="BACON CHEESEBURGER"
            ingredients="Angus Beef, Bacon, Caramelized Onions, Cheddar Cheese, Lettuce, Tomato, Pickles, Blast Burger Sauce, Brioche Bun"
            price={15}
          />
          <MenuHeader ref={macRef}>Mac</MenuHeader>
          <MenuItem dishName="BACON MAC AND CHEESE" ingredients="Creamy Five Cheese Sauce, Crispy Bacon" price={15} />
          <MenuItem
            dishName="COWBOY MAC AND CHEESE"
            ingredients="Tri-Tip, Red Onions, Charred Salsa, Sour Cream"
            price={16}
          />
          <MenuItem
            dishName="CAJUN MAC"
            ingredients="Spicy Hot Sausage, Blackened Chicken, Mushrooms, Peppers, Onions"
            price={16}
          />
          <MenuItem dishName="CARNITAS MAC" ingredients="Carnitas, Onions, Salsa, Cilantro" price={16} />
          <MenuHeader ref={sweetsRef}>Sweets</MenuHeader>
          <MenuItem
            dishName="COOKIES"
            ingredients="Our Fresh-Baked Chocolate Chip Cookie, Topped with Ghirardelli Chocolate Brownie Chunks, Caramel Sauce and Fresh Whipped Cream"
            price={9}
          />
          <MenuItem
            dishName="FRIED CHEESECAKE BITES"
            ingredients="Stuffed and Fried, Powdered Sugar, Raspberry Sauce"
            price={10}
          />
          <MenuItem dishName="BAG OF WARM COOKIES" ingredients="Mini Warm Chocolate Chip Cookies" price={8} />
        </section>
      </div>
    </Layout>
  );
}
