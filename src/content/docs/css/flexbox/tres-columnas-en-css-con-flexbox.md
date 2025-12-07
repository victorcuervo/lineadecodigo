---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6N3V7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfdhC%2BUPHEMwKVqFi0Rm9vTNHNydRJWw2RCLqrLFCtoQIgPCbBTtsWXFijIhyZI2mNKG3pYVBAZI14vylJS57iTJIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdimarIYTkEbtx6NCrcA%2FpWNy483fkH5Zf2OfQwiUNvQ7w8D98s6NYNFho6rI5KGxLAmkmYfdI15R4ATHIBa%2F1qFASd%2BspTJKk%2BuOiv5yLZcPtFZ43M33DVQ%2FGCqtamSTodI73okY8RgkB%2F1NeaFX0l9x8JSVHlJf4GD%2Fvsgx1c7SZkKAkWrhoKDa0MJGY%2B4AgvpU6EvbO%2FAYalxV25oUntUTtxq6aXKURA2LMy8hjcd%2FeAYtK2aN0aQCbEDgrMUZfVRoSWV9wL5XU1lx9c5hq3tS2iATb4M9bYxcVlkvsa8zIdal1EbPiD7YSzzDmEwN2X1iUxLj%2Bvo84hSY44jcUxE%2BKzY7D8GL8qYILFeZukic3cl3t6gZQsvS9bh%2FjX9CFgrBd55dM3M3EIEuRQzRLHraJ8457Tgry4OwoMzaC9ierecVliSQ4XaFOyNsChULXFBnxNmd1G2e9MENBhDhaekBPYdohxxXjW1CmJ%2Fjn4a7TZzq2X1LhC0Pg%2FX4viMoqyithi3k3PMsnQM7Bf85appe0gUX3hCcrY6Frm%2FxraVAfOB9pbUthd98MvCaE9voLe7b%2BGGYgenwIpzxuI0TFRTTyvbNmnQpcoU5q3bjQw9Ic%2Be7uxyYRmUA6XzSPd53ZPaCxUyyasuohBMP631skGOqUBYgUpvHQf%2Buq8wYUtaWICRTHKV3yKCnrGvf5QA884jsNOE5sEu4xV1K60%2FNFjEkQpr8B4bRkda%2FPPE2MqbxZWLmbcS9r2jR81L9U9Cf6TKPxGvLcKJCanJ4wnf7y0eGHwWoJOQidYp4GRBfC9HAVx%2FzLMI4s3HtKIg2mDRYSZ7WM37M5%2FI2szwg1xBjpFi4BjG%2BcnotpLZ8pCf4TS44d%2BuLtvhv%2Fd&X-Amz-Signature=e7dab8d5c3e25d127a3762a0202df9acca610e423e9464013442f560fc9579c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD6N3V7B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfdhC%2BUPHEMwKVqFi0Rm9vTNHNydRJWw2RCLqrLFCtoQIgPCbBTtsWXFijIhyZI2mNKG3pYVBAZI14vylJS57iTJIqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdimarIYTkEbtx6NCrcA%2FpWNy483fkH5Zf2OfQwiUNvQ7w8D98s6NYNFho6rI5KGxLAmkmYfdI15R4ATHIBa%2F1qFASd%2BspTJKk%2BuOiv5yLZcPtFZ43M33DVQ%2FGCqtamSTodI73okY8RgkB%2F1NeaFX0l9x8JSVHlJf4GD%2Fvsgx1c7SZkKAkWrhoKDa0MJGY%2B4AgvpU6EvbO%2FAYalxV25oUntUTtxq6aXKURA2LMy8hjcd%2FeAYtK2aN0aQCbEDgrMUZfVRoSWV9wL5XU1lx9c5hq3tS2iATb4M9bYxcVlkvsa8zIdal1EbPiD7YSzzDmEwN2X1iUxLj%2Bvo84hSY44jcUxE%2BKzY7D8GL8qYILFeZukic3cl3t6gZQsvS9bh%2FjX9CFgrBd55dM3M3EIEuRQzRLHraJ8457Tgry4OwoMzaC9ierecVliSQ4XaFOyNsChULXFBnxNmd1G2e9MENBhDhaekBPYdohxxXjW1CmJ%2Fjn4a7TZzq2X1LhC0Pg%2FX4viMoqyithi3k3PMsnQM7Bf85appe0gUX3hCcrY6Frm%2FxraVAfOB9pbUthd98MvCaE9voLe7b%2BGGYgenwIpzxuI0TFRTTyvbNmnQpcoU5q3bjQw9Ic%2Be7uxyYRmUA6XzSPd53ZPaCxUyyasuohBMP631skGOqUBYgUpvHQf%2Buq8wYUtaWICRTHKV3yKCnrGvf5QA884jsNOE5sEu4xV1K60%2FNFjEkQpr8B4bRkda%2FPPE2MqbxZWLmbcS9r2jR81L9U9Cf6TKPxGvLcKJCanJ4wnf7y0eGHwWoJOQidYp4GRBfC9HAVx%2FzLMI4s3HtKIg2mDRYSZ7WM37M5%2FI2szwg1xBjpFi4BjG%2BcnotpLZ8pCf4TS44d%2BuLtvhv%2Fd&X-Amz-Signature=a403181dfb77d3b755cc4b014bf81622a641ba26eb350b732e7e93f76a668a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

