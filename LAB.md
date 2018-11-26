# List of Vue

## Code Wars

* [Kata One](https://www.codewars.com/kata/insert-dashes)

## Lab

Create a vuejs app that displays a list of items and allows user to select on of the items. You
get to choose your own domain topic, however take a look at requirements to help guide your choice.

## Components

Basic component structure (use real domain names):

```
App
 |
 +- Items
 |
 +- Detail
```

## Items

Pick a domain topic of interest. Limited requirements:

* Has at least three properties
* Find some image sources

## Functionality

1. Create dummy data with at least 3-4 items and return as `data` of `App`
1. `Detail` component should have different render until item is selected. 
1. Pass callback function `onSelect` to list that changes the `Detail` component
1. BONUS: 
    * Show selected item in list
    * Add another component that allows adding a new Item
        * Pass `onAdd` from `App`
        * Add form (`v-on:submit.prevent="..."`)
        * Use `items.push(newItem)` in `App`

## Rubric

* List of Items **3pts**
* Detail Component with two render states **3pts**
* Control of update from App **2pts**
* Clean and Idiomatic Project Organization, JavaScript and VueJS **2pts**
