---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWX4K5Y2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwqWIDy%2FdmfGfBksY5OFXYNb3Ll217%2FkqxD4T0FiOMkwIgPHdHumBRdeQFb9QQbJxZ9Jc2w60sf9Yusc32drwYG9Uq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGd9k8NWcXmTiRCHMSrcAynrcGnifNG4n3PpsMcj3HULeoZ5NNvQfsb6aWyz7VIbyPlRnTD3Zg3bRvaycOZ%2BpEB3pBpMwVknGtLeGV4RdpSh5CXJ2ohzIB0Gvs0CJpnJlDHV3jisnGtB4VZsW%2Bn522QSrCffoCQ%2FW7uzHD0srNsQteTjcUtbdv3kXU6OXwhQO7ghdA6PRjk9f%2BeioN6ClEDTN9WnAjs4ib%2BcSGeOlk94PylCqd%2F9XYWDWafRsjiNu4K9Eve%2FPK5f7czmP%2B%2Blbb%2BAN9eQl5tut8Qy2Z1fzOSZCnleUhm%2B5n4Hy3PziFL0nELu0Aavu63CeqWCE4ujJXHpZZwW%2BRkL37pORgeld5dtB2nfzT14oniTspkNuWnQGe1DaOAyLyyTniegBosApENhC%2FAgDzisKdMiWCh3O6GNVttVQfw0PhkpR7xYSMLsPTYAhjqTY69Zy5Z4DGOMH6XlqiGLK4NVUQH48%2FZC2pcC0cfpcxVIhyxn%2FJNXEJmLJrJ5ARi7Lb1RC3qKx1sPPaOylzQS1DO1KM%2BGi8gXcdHBL5HdiqmUTO22xox8a0v%2B%2Fw94xsFYMiZhbJTYEc%2FiPo2B0W9sN4mcb6SHPO003TFBWotbmNxKegPz8i%2BjpTMdt4l9WIT8TUnUP%2FxhMMLmy8kGOqUBrtiv2kNHykSr27FNVkzA4OLehqQYSk%2B0STdtTc0Wj%2FIg4WvcGJDNxZi%2Fu0fi2cKaBUmNWXL9LLEIhJ2c366MqjlLo%2BkM0p8HPV7VqjYHVVsbpaE6ZBVfVNk7sJqxLeJH%2FDTRuvYbsneLB84D5pUsqXMLGy9WAGAEIGnFvEOQj2SMd0BirrBGck83gTnutpzpP46Tol0cu0wJDJRNeYmS%2Fi31L6tx&X-Amz-Signature=dddc5807c63d869e36df010f9316fee36a6d85d1a5635c2d333e65e9e03f7086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWX4K5Y2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwqWIDy%2FdmfGfBksY5OFXYNb3Ll217%2FkqxD4T0FiOMkwIgPHdHumBRdeQFb9QQbJxZ9Jc2w60sf9Yusc32drwYG9Uq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGd9k8NWcXmTiRCHMSrcAynrcGnifNG4n3PpsMcj3HULeoZ5NNvQfsb6aWyz7VIbyPlRnTD3Zg3bRvaycOZ%2BpEB3pBpMwVknGtLeGV4RdpSh5CXJ2ohzIB0Gvs0CJpnJlDHV3jisnGtB4VZsW%2Bn522QSrCffoCQ%2FW7uzHD0srNsQteTjcUtbdv3kXU6OXwhQO7ghdA6PRjk9f%2BeioN6ClEDTN9WnAjs4ib%2BcSGeOlk94PylCqd%2F9XYWDWafRsjiNu4K9Eve%2FPK5f7czmP%2B%2Blbb%2BAN9eQl5tut8Qy2Z1fzOSZCnleUhm%2B5n4Hy3PziFL0nELu0Aavu63CeqWCE4ujJXHpZZwW%2BRkL37pORgeld5dtB2nfzT14oniTspkNuWnQGe1DaOAyLyyTniegBosApENhC%2FAgDzisKdMiWCh3O6GNVttVQfw0PhkpR7xYSMLsPTYAhjqTY69Zy5Z4DGOMH6XlqiGLK4NVUQH48%2FZC2pcC0cfpcxVIhyxn%2FJNXEJmLJrJ5ARi7Lb1RC3qKx1sPPaOylzQS1DO1KM%2BGi8gXcdHBL5HdiqmUTO22xox8a0v%2B%2Fw94xsFYMiZhbJTYEc%2FiPo2B0W9sN4mcb6SHPO003TFBWotbmNxKegPz8i%2BjpTMdt4l9WIT8TUnUP%2FxhMMLmy8kGOqUBrtiv2kNHykSr27FNVkzA4OLehqQYSk%2B0STdtTc0Wj%2FIg4WvcGJDNxZi%2Fu0fi2cKaBUmNWXL9LLEIhJ2c366MqjlLo%2BkM0p8HPV7VqjYHVVsbpaE6ZBVfVNk7sJqxLeJH%2FDTRuvYbsneLB84D5pUsqXMLGy9WAGAEIGnFvEOQj2SMd0BirrBGck83gTnutpzpP46Tol0cu0wJDJRNeYmS%2Fi31L6tx&X-Amz-Signature=f819e45dc0e5860b08893f7d06435630541f37d80e510188d5c123af5c260beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

