---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLD3XIH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrwWh%2BoqqaZJD5SWSg%2FS9VKfJeq28Gn54DrGc6HSrhiAiAsfQnsDAg0ukbmFVXDb%2BuFfEzPgSOV1OKUx4%2FTqLf%2BDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkf2YqIZmQukk7CA8KtwDOhIdypV4IIjxgeJN411YZyvKzLiEQix%2F7jS7S4GoLcepS4RkqK18Wq893Xyz8JEnrN0%2BSy4gnyBMukFTOjDLM8ZRCj22rBbTtN%2B4tUOozeOewOVUOpVitu3Po8MuHC4zxLOrXNuryoWW6aWodzskLJuscZ8U2GAStljsg5%2FOX6xX1g%2F3uHw%2FND0RRN9YEGgD3Jqmuk1j8HpDyFQAukcI1XK40jAxgeaFQrrPE%2BMvpHiWjPk6%2FnJPEfvLiQJ7MB8OVtYZ02L2Fss4izHkzuBGg3b9JH%2FKGdyjn6C1KDIw9QBh1CLKno2HlL%2FANaMTeZRtJzxR2OJritRNMYMxXZue7uhErx%2BOsZLk0XwCDrTSKRqiHSGs2fJWcumiIEyB%2FAyOIq%2BLfpALkO5NcJq9MtdCNkLM6zeVlfZIK4tOHBGORSDktzzd9meo%2FjBMiRs%2B9c2yL48RVgfMmzVndPlbLtvnPvktFQq6HodVg2gawKu0HdK%2Bfx9v3FCRk3HzOrsrE1Z9AiIJ2%2BJ%2B7pVTKdoQHYz9vaGfrRtKSuTYQAc%2BqeGtQfiUs7MsAccOs9hxFO4%2F%2FVve%2FkX9AGOuurYEMHTshs085NDlEFYLj97uN6o9eM%2Fnu%2Bdd%2BM0f01X870zZmtcw8%2F3SyQY6pgHS5EcoCxV%2FPA85OKyUwaaDoWBtnwA4MLLqDlJfF41lyJOFgDnDfW4zVA0tVOUHIOHYcK0XG7gHMTmHBdtm%2BZ2hbF4lS6ug96gIB7uXERtTLMXhaQwe%2FttVzUIAAat86C3%2FYfdguO8hr8EmfGaKtSX%2FN4oV5G54EicPeIWIeNls5QCPPm125kkQEwkkoKnT09OcV0SkuEFgrtF7Q7%2FQU57ByfZiN6yh&X-Amz-Signature=659b9434f873ef364b0c481a707349e295cc6fb10c2cec95e86c882b676390a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLD3XIH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrwWh%2BoqqaZJD5SWSg%2FS9VKfJeq28Gn54DrGc6HSrhiAiAsfQnsDAg0ukbmFVXDb%2BuFfEzPgSOV1OKUx4%2FTqLf%2BDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkf2YqIZmQukk7CA8KtwDOhIdypV4IIjxgeJN411YZyvKzLiEQix%2F7jS7S4GoLcepS4RkqK18Wq893Xyz8JEnrN0%2BSy4gnyBMukFTOjDLM8ZRCj22rBbTtN%2B4tUOozeOewOVUOpVitu3Po8MuHC4zxLOrXNuryoWW6aWodzskLJuscZ8U2GAStljsg5%2FOX6xX1g%2F3uHw%2FND0RRN9YEGgD3Jqmuk1j8HpDyFQAukcI1XK40jAxgeaFQrrPE%2BMvpHiWjPk6%2FnJPEfvLiQJ7MB8OVtYZ02L2Fss4izHkzuBGg3b9JH%2FKGdyjn6C1KDIw9QBh1CLKno2HlL%2FANaMTeZRtJzxR2OJritRNMYMxXZue7uhErx%2BOsZLk0XwCDrTSKRqiHSGs2fJWcumiIEyB%2FAyOIq%2BLfpALkO5NcJq9MtdCNkLM6zeVlfZIK4tOHBGORSDktzzd9meo%2FjBMiRs%2B9c2yL48RVgfMmzVndPlbLtvnPvktFQq6HodVg2gawKu0HdK%2Bfx9v3FCRk3HzOrsrE1Z9AiIJ2%2BJ%2B7pVTKdoQHYz9vaGfrRtKSuTYQAc%2BqeGtQfiUs7MsAccOs9hxFO4%2F%2FVve%2FkX9AGOuurYEMHTshs085NDlEFYLj97uN6o9eM%2Fnu%2Bdd%2BM0f01X870zZmtcw8%2F3SyQY6pgHS5EcoCxV%2FPA85OKyUwaaDoWBtnwA4MLLqDlJfF41lyJOFgDnDfW4zVA0tVOUHIOHYcK0XG7gHMTmHBdtm%2BZ2hbF4lS6ug96gIB7uXERtTLMXhaQwe%2FttVzUIAAat86C3%2FYfdguO8hr8EmfGaKtSX%2FN4oV5G54EicPeIWIeNls5QCPPm125kkQEwkkoKnT09OcV0SkuEFgrtF7Q7%2FQU57ByfZiN6yh&X-Amz-Signature=81a60d70d9d84edfa0401712d8d353baf4cdcf47e15a79aa8c6d755f6e1907af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

