create table ramen_restaurant (
    product_id serial primary key,
    name varchar(20) not null,
    price int,
    description varchar(250)
);

create table book (
    group_id serial primary key,
    number_of_customer int,
    date varchar(50),
    time varchar(10),
    customer_name varchar(20),
    phone_number int
);