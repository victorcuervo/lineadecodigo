---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXPFB57%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCek6iKJQcr5KLwRp19pchBUM7bHdNCCHHz2qO5Yt%2FFNgIgHd2Ih2A20%2Fz1vh8iACDHZdFRadFpJ4ZEhVmxoda108QqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpnnfvkQWdahBV9RSrcAzXTe8dl2dRYLgnnfmSdVxGOeG50N2JiCb%2FGeCLRsbkgmZWpGgzfdI1ublWT9s%2BGaNqq%2FDDTwND%2FRjS0sSgws34SrsUYnJ38pWMXQOrGf1DE8ixa%2BnLJLfrh9KwlCejYylL46j9UjJbvfrJmbesvKAWi3JfPMMXwi8TGKEQktqF0IyfZlPX7IwO1eTTeuQGyQ3y%2FPGhrEPOFOeDI17cFIz6acDJgd%2BLPPOVn9y6RJQDMdy7PFARUO40gbnpFOpeO3tdWPLbHdFj3FUZfChHXmbKpDtKL6DXzaHGq65sX%2FiM%2BofMWg5GU5DJcVlmG22XOumZTR3WBQ5sgJp%2BDY7Tsl1Gl3dfzUBBxvgKSAWScAkJlfpDKanh3wi7oWlq20YjX1x%2Bd4Km42Ena%2FHGXEXC4Z2Hevi2vExtOfpgoIk7FxqVdc6jChZehum4voANb%2Fin%2Fa41iFWMpQ%2BfDZkWw536DKimpOJFgA287bn2zONy00xuJ7Blj25TWeySVgt8GRmTM48VQzSiulvI83BDI4YORYX5F2V3ICuG9Q%2FfL0%2FgPZme6PbggE6d9LgsEfiSvJckJH8kabUIKXrPXOsigpLwHrQS7ToVYy4qodBxIcKN22FNao%2B5Yx9SzYKmog8%2F7MM2t3skGOqUBdCqYNdn9P0JC3rw%2Bn7AdzyeeSzFCqMTPjtDR2C%2FmS71OxuCAvPQYgKvDAPgtADTLWia1POZcm8Z8bOWQlu%2BSu6BfKxGppnsKgv44xNMwXIoDaPO9fQM%2FLJ161cX0s2zX3lPmVAenEaMQdsDbV%2BhkKOLRmcM1mGQuTHCuC5%2B0IeeKwNu5rOPCoweqTsu357onNopYDrPerTCs3IBWMZeDJyTaJIYF&X-Amz-Signature=39068773f5f5e74d09274db4bf5c3c8a7bd4a518fae33e32f8e9e9e5ac6f8d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BXPFB57%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCek6iKJQcr5KLwRp19pchBUM7bHdNCCHHz2qO5Yt%2FFNgIgHd2Ih2A20%2Fz1vh8iACDHZdFRadFpJ4ZEhVmxoda108QqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEpnnfvkQWdahBV9RSrcAzXTe8dl2dRYLgnnfmSdVxGOeG50N2JiCb%2FGeCLRsbkgmZWpGgzfdI1ublWT9s%2BGaNqq%2FDDTwND%2FRjS0sSgws34SrsUYnJ38pWMXQOrGf1DE8ixa%2BnLJLfrh9KwlCejYylL46j9UjJbvfrJmbesvKAWi3JfPMMXwi8TGKEQktqF0IyfZlPX7IwO1eTTeuQGyQ3y%2FPGhrEPOFOeDI17cFIz6acDJgd%2BLPPOVn9y6RJQDMdy7PFARUO40gbnpFOpeO3tdWPLbHdFj3FUZfChHXmbKpDtKL6DXzaHGq65sX%2FiM%2BofMWg5GU5DJcVlmG22XOumZTR3WBQ5sgJp%2BDY7Tsl1Gl3dfzUBBxvgKSAWScAkJlfpDKanh3wi7oWlq20YjX1x%2Bd4Km42Ena%2FHGXEXC4Z2Hevi2vExtOfpgoIk7FxqVdc6jChZehum4voANb%2Fin%2Fa41iFWMpQ%2BfDZkWw536DKimpOJFgA287bn2zONy00xuJ7Blj25TWeySVgt8GRmTM48VQzSiulvI83BDI4YORYX5F2V3ICuG9Q%2FfL0%2FgPZme6PbggE6d9LgsEfiSvJckJH8kabUIKXrPXOsigpLwHrQS7ToVYy4qodBxIcKN22FNao%2B5Yx9SzYKmog8%2F7MM2t3skGOqUBdCqYNdn9P0JC3rw%2Bn7AdzyeeSzFCqMTPjtDR2C%2FmS71OxuCAvPQYgKvDAPgtADTLWia1POZcm8Z8bOWQlu%2BSu6BfKxGppnsKgv44xNMwXIoDaPO9fQM%2FLJ161cX0s2zX3lPmVAenEaMQdsDbV%2BhkKOLRmcM1mGQuTHCuC5%2B0IeeKwNu5rOPCoweqTsu357onNopYDrPerTCs3IBWMZeDJyTaJIYF&X-Amz-Signature=7221a31ca1a43d0f5e67fefae53a6c202697c41f08b0328602df2cd681bffaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

