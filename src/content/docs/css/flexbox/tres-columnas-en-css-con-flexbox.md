---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEDGI2E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeH2tzdchhBAYgeztv0d%2FCcW3HXe1cIkcGvR6GDuaS2AiBTO1tAjLJr6mWX2V8Okgh2dKWVORjRTLXjJ0%2BYpzo16Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMsflvmBbwpFJId9FYKtwDSgACanfGg5BCZs0loiWkknZculCjTCHmsmPTVtBzbIAHhfrlpW5aOmAOuzlQW46R%2BkLATWNwHT1ePjc4Zj79NJSsfVFlhFaruP9ynhtaf%2BSv5t55325TGipEd2e3%2B0oCzt9bGr5oWJM7tMxhstMgD31FDl2h6GMd8Kmw16AJgoW0phsEb83QOLoy6pEToNxJtssuS5vR2%2BpEKkhGGy8GOrc3qWx%2FidT%2B6dOXNduiXMUegZI2dPZAefpeT%2F%2BBW7Wjb2F4uPw9M1XBj2QjCBGAhYYPABOUxQK8NTJximc9Rwq5NY9BzlxG7RzvC7gpa%2BSd0RoWAUNsAmKMK1HumRkud9jp15XV7%2Fuw9X2ikTNDSjE97xJZaG152q20pzESoXCI2RcH%2B9L12RFUEVKxdzx4ymRl%2FUsEIPYfdOpX6eJuWlY%2BS165S0C5c3rhiU%2B5uMfccIzORKY73UHlW%2Fu%2BuKDpVyLTOR5KicaF8PPlIfHz7di4HE9EiwpKA16PJk%2BpQDt27saXvoK%2B17kxkjLGOPs11wAJrHm0rynSoe7k%2FE1cZrO7Nb55lkuTmdJrr7sLqVK0%2Bm9UZPgAZQkF%2FRaxi8Z8ytvjYHTOsp666JQSpqvdd3Z5LgNLfwngXUZYizAwu8HRyQY6pgHs3R3rtivHD7MuhY5zGlbhznLn%2BZrqR7w7ax1vG129yNk6rZNr5N33l1zVlf9DQMRmE%2B1kvKRAPRpIZLm%2FuYSBfqBpSOw8wXwyzAIAYH4nj562e97m2FbieWmKStv24%2B%2FFmG7%2FsThIlwkkTDxjCU4b%2BMoxMPzluydhGBIR0AyJiXiCjGJhKrxQS6%2FlNQTEAT2Xw3c69gPUnyxWDiiwaaIBKRgHKwmL&X-Amz-Signature=86b2e36ff1464e2503d63743470347d7a00acb9842c9de7a01317ef8d01de9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEDGI2E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeH2tzdchhBAYgeztv0d%2FCcW3HXe1cIkcGvR6GDuaS2AiBTO1tAjLJr6mWX2V8Okgh2dKWVORjRTLXjJ0%2BYpzo16Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMsflvmBbwpFJId9FYKtwDSgACanfGg5BCZs0loiWkknZculCjTCHmsmPTVtBzbIAHhfrlpW5aOmAOuzlQW46R%2BkLATWNwHT1ePjc4Zj79NJSsfVFlhFaruP9ynhtaf%2BSv5t55325TGipEd2e3%2B0oCzt9bGr5oWJM7tMxhstMgD31FDl2h6GMd8Kmw16AJgoW0phsEb83QOLoy6pEToNxJtssuS5vR2%2BpEKkhGGy8GOrc3qWx%2FidT%2B6dOXNduiXMUegZI2dPZAefpeT%2F%2BBW7Wjb2F4uPw9M1XBj2QjCBGAhYYPABOUxQK8NTJximc9Rwq5NY9BzlxG7RzvC7gpa%2BSd0RoWAUNsAmKMK1HumRkud9jp15XV7%2Fuw9X2ikTNDSjE97xJZaG152q20pzESoXCI2RcH%2B9L12RFUEVKxdzx4ymRl%2FUsEIPYfdOpX6eJuWlY%2BS165S0C5c3rhiU%2B5uMfccIzORKY73UHlW%2Fu%2BuKDpVyLTOR5KicaF8PPlIfHz7di4HE9EiwpKA16PJk%2BpQDt27saXvoK%2B17kxkjLGOPs11wAJrHm0rynSoe7k%2FE1cZrO7Nb55lkuTmdJrr7sLqVK0%2Bm9UZPgAZQkF%2FRaxi8Z8ytvjYHTOsp666JQSpqvdd3Z5LgNLfwngXUZYizAwu8HRyQY6pgHs3R3rtivHD7MuhY5zGlbhznLn%2BZrqR7w7ax1vG129yNk6rZNr5N33l1zVlf9DQMRmE%2B1kvKRAPRpIZLm%2FuYSBfqBpSOw8wXwyzAIAYH4nj562e97m2FbieWmKStv24%2B%2FFmG7%2FsThIlwkkTDxjCU4b%2BMoxMPzluydhGBIR0AyJiXiCjGJhKrxQS6%2FlNQTEAT2Xw3c69gPUnyxWDiiwaaIBKRgHKwmL&X-Amz-Signature=f036f2c60bc5ceaaf5156f468c674ad40725eb0026d6d1a58add5176412a6ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

