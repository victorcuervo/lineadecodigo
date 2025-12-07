---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR724LR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0B2IVZd1ABgGQ1HkmhH6Ii6A8TSpucCXOFzstvzuNCgIgFYuuZqI%2FT2GvgJttFT1mO7SNq2YJ2Mog9JlmMIr1KAkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCtcqWT9VsigK6BtSrcA78n44ONizn5NybPYmobCZpzUjXlJPcbwQi3Sa6dtxV%2FbESFL3atGyLViFRZ0%2Baetsl8l4mh0haB3uuqjMLCLsH6Mj3idtFHIIqZts3wzaxBmkambgc7Y7qF884%2FUEsHz5BgaahQ9yQDbYDXINZCEkuEyBPxbVPVlJFiAddkApvi3kcnbIbNgRqTaFWF8ere5QQfgzUZG%2FYetSMlSxmyHgllux2xyr6CGZvJs0%2FNQ%2FGb%2BzlN8okEas6qA300uTIADgrm9o9y33wHgHGxQcGGBjoMl3qEF4g9nncywHkWqx3wo905%2F8%2Fv7v2aqhS3NFxRI3NWwomXrWVu1hlh0uJloxw5IcDWouiJ6v%2B%2BSRjsGe4iKvibHpZ2JX8bsNcBvlWEw2rGDU4uhwXcp711DDe7YDYG1DtwMPS%2Fo9KyGoGzuFvIi1jnSFXJf%2BF5j39KUz7b%2FBOoyWMFcsmkjCSSJaEir%2FZPO5vjeamq95CmB7xfqxbCoJhRveZq4iU4VOujE2PZd3bv4qMFPERVom9CzNZjEEXtAjjtE7qPmDLCfmxTYtjDHEnkwF8gAC%2F7DOOUcgoTGj7Z7Yx8NCJcZJBE4v%2B8Qj%2BajYsmdChV6zN5FcRU7LJEFOLENSMdTG2yGHTBMNm%2B1skGOqUBFU%2FlRN6bNnRf3oFV%2FuJ1HIPvfEizPR4MKtvb2DQ5Hnx0Bxv3Aid9xgcN6j855SebZDnnxKIvPM52C7OlEptWfJYZZs81EC60w9kPYSpsSu6c0jfrttoGG05Yk1nvY%2B6vTVfjNYperMTnuHsLgxPBzf4dOSH1XR9kzn6sdHcgztbxV0P7qOlL4pxMdZD%2F9oEDaIG0Vxy%2FkTAnLnI6eI69z06IlLyr&X-Amz-Signature=e425545b487d426d2d7b5192b78d90b647d01ae0422e6156477e1177ca0a1e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR724LR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0B2IVZd1ABgGQ1HkmhH6Ii6A8TSpucCXOFzstvzuNCgIgFYuuZqI%2FT2GvgJttFT1mO7SNq2YJ2Mog9JlmMIr1KAkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCtcqWT9VsigK6BtSrcA78n44ONizn5NybPYmobCZpzUjXlJPcbwQi3Sa6dtxV%2FbESFL3atGyLViFRZ0%2Baetsl8l4mh0haB3uuqjMLCLsH6Mj3idtFHIIqZts3wzaxBmkambgc7Y7qF884%2FUEsHz5BgaahQ9yQDbYDXINZCEkuEyBPxbVPVlJFiAddkApvi3kcnbIbNgRqTaFWF8ere5QQfgzUZG%2FYetSMlSxmyHgllux2xyr6CGZvJs0%2FNQ%2FGb%2BzlN8okEas6qA300uTIADgrm9o9y33wHgHGxQcGGBjoMl3qEF4g9nncywHkWqx3wo905%2F8%2Fv7v2aqhS3NFxRI3NWwomXrWVu1hlh0uJloxw5IcDWouiJ6v%2B%2BSRjsGe4iKvibHpZ2JX8bsNcBvlWEw2rGDU4uhwXcp711DDe7YDYG1DtwMPS%2Fo9KyGoGzuFvIi1jnSFXJf%2BF5j39KUz7b%2FBOoyWMFcsmkjCSSJaEir%2FZPO5vjeamq95CmB7xfqxbCoJhRveZq4iU4VOujE2PZd3bv4qMFPERVom9CzNZjEEXtAjjtE7qPmDLCfmxTYtjDHEnkwF8gAC%2F7DOOUcgoTGj7Z7Yx8NCJcZJBE4v%2B8Qj%2BajYsmdChV6zN5FcRU7LJEFOLENSMdTG2yGHTBMNm%2B1skGOqUBFU%2FlRN6bNnRf3oFV%2FuJ1HIPvfEizPR4MKtvb2DQ5Hnx0Bxv3Aid9xgcN6j855SebZDnnxKIvPM52C7OlEptWfJYZZs81EC60w9kPYSpsSu6c0jfrttoGG05Yk1nvY%2B6vTVfjNYperMTnuHsLgxPBzf4dOSH1XR9kzn6sdHcgztbxV0P7qOlL4pxMdZD%2F9oEDaIG0Vxy%2FkTAnLnI6eI69z06IlLyr&X-Amz-Signature=47c42d6758346a378e14eac35667df04c6470476c34a04f0e49c5a9b643aeceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

