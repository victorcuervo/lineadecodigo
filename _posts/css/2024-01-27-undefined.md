---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JXVSMF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm6zpWiiMHNhIb3IeMBdPn8pXv2JZkXunKf5rQmS9wAAIgGovBZfRbgI43AyTKyszNiPP6adX%2FOzEt6L0B19tl1Hkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK75T1Cw3WBDsffbrSrcA9E8K4D9OvFyZiX3OLjHbjxZ7ZV3%2BbPTKH71vlv0l%2BeOHS%2BdM45EjU1gasOPaUnCdVH%2F%2Bku4HbnEp1NFS5nSZAbmfepwjWZU%2Fh%2BYbhmsNng31sJQn2q838gCDKmNnHOdNzcVjL%2BUxqgeEq4jf6vg1XpTLoc1bGBTHeHREY%2FDkFah5bgp2AQYwVCXh%2B0tCnUYPMzYBC72vvZabGTCKTAXPK31ErLlLO0I9rIUy5CC%2BQ4KrpHRm6dOQsFjhoUYaP%2Fdz1KIHkV9Eov5RjTH5VAj9Z6%2FYQBxz8qpeTd8SNJF06BFoBf9DrEu%2BuPttjrphi3psIequ2dqRtNb9H%2FtIqyOqn7Qe5KHFz2nJoR0gC2Lek19GfnkU85T9q0jwHcwhQagDbeeXEZ%2BpEYX0z9XNv%2BSz5u2PtijwB4OvXROH5latyWwYdS%2BFgM3AYzUNmKVeoGNVuQ7srEU5si6BDEc2TZmAKDiw1YRZZh39MPEt%2FWFz8jACFbRc37IhD%2F3kkZC5NcxtBU2lIY8PBISpgtXCS9iSmJMx0cwKQtHRpAd2scHwsBRCELTCY1QqRlk1aeqzEIVp0McYvnr%2FRFVRo2s%2F3UOq%2BtvuXTnGGZU%2BLV4N%2BvJvkABq%2B96x26aANaNqxooMKjawckGOqUB3%2F4gTmZNeq5OnUGt%2B8JvNyERI%2F7RZ%2Bl9Ukq%2BdINiUaQpwJfWUfHbKzzUSLc%2BMT%2BxxZK2SjuCtatl4oKWI7OOdD9oeHGoHPs6D6XK%2B%2F8lIZBZzVf2UCCZk091qs7eTypV4FxKN0E5X5n8gWwZ6wuKDhrllTxxcTNtHWqTc7ffY0xL3HHCYJw2mgIdfx%2Funv%2B1QEDdA9YBsEPTUtxiUbULTcaguyv1&X-Amz-Signature=0dd1cad75d98e682064552a684687f258c72cac329819037ac3963542094fc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JXVSMF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCm6zpWiiMHNhIb3IeMBdPn8pXv2JZkXunKf5rQmS9wAAIgGovBZfRbgI43AyTKyszNiPP6adX%2FOzEt6L0B19tl1Hkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDK75T1Cw3WBDsffbrSrcA9E8K4D9OvFyZiX3OLjHbjxZ7ZV3%2BbPTKH71vlv0l%2BeOHS%2BdM45EjU1gasOPaUnCdVH%2F%2Bku4HbnEp1NFS5nSZAbmfepwjWZU%2Fh%2BYbhmsNng31sJQn2q838gCDKmNnHOdNzcVjL%2BUxqgeEq4jf6vg1XpTLoc1bGBTHeHREY%2FDkFah5bgp2AQYwVCXh%2B0tCnUYPMzYBC72vvZabGTCKTAXPK31ErLlLO0I9rIUy5CC%2BQ4KrpHRm6dOQsFjhoUYaP%2Fdz1KIHkV9Eov5RjTH5VAj9Z6%2FYQBxz8qpeTd8SNJF06BFoBf9DrEu%2BuPttjrphi3psIequ2dqRtNb9H%2FtIqyOqn7Qe5KHFz2nJoR0gC2Lek19GfnkU85T9q0jwHcwhQagDbeeXEZ%2BpEYX0z9XNv%2BSz5u2PtijwB4OvXROH5latyWwYdS%2BFgM3AYzUNmKVeoGNVuQ7srEU5si6BDEc2TZmAKDiw1YRZZh39MPEt%2FWFz8jACFbRc37IhD%2F3kkZC5NcxtBU2lIY8PBISpgtXCS9iSmJMx0cwKQtHRpAd2scHwsBRCELTCY1QqRlk1aeqzEIVp0McYvnr%2FRFVRo2s%2F3UOq%2BtvuXTnGGZU%2BLV4N%2BvJvkABq%2B96x26aANaNqxooMKjawckGOqUB3%2F4gTmZNeq5OnUGt%2B8JvNyERI%2F7RZ%2Bl9Ukq%2BdINiUaQpwJfWUfHbKzzUSLc%2BMT%2BxxZK2SjuCtatl4oKWI7OOdD9oeHGoHPs6D6XK%2B%2F8lIZBZzVf2UCCZk091qs7eTypV4FxKN0E5X5n8gWwZ6wuKDhrllTxxcTNtHWqTc7ffY0xL3HHCYJw2mgIdfx%2Funv%2B1QEDdA9YBsEPTUtxiUbULTcaguyv1&X-Amz-Signature=902bfb6ce3ee2ce5d2dbdf9f6b716c2160006bc9001ebc833fe448985e8ccd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

