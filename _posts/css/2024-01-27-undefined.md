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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORBRPWO%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBQvLQDN0PYuvaTE%2Bn%2BMOmiPcKKftdgF%2FHtwKYFqxAU9AiEAs8umz6wIricCLCO%2BbcY1e9J4jvPTaENp2g49T%2Fc6f%2FYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJTmW7iGXCR0HUMXuyrcA7Bpp%2BJ%2BdI%2FhZQpQ722H%2FWCjLCVhJBFqxJjgO152fHy6lsZszTMFhaWfWgSOyaQCdoPX0ISzy5MpOxOh0lDOjKxhACZKu6t8ihSsVwIcyL2R16D7c1l%2FlGtl9qe57Cr2wsF8KKQotyP%2BBI10UlC3w4WetqZZ3106w2mEGXSaxIsvVtMXTk2pSm%2B%2FVJEK%2F6Nlz8crx7qxJ5MhXJ5IR%2B9wo2dpn3%2BlHgFUqh6TRx0yY27XPJPSxtMHtSV7yQ5RnvzSw6eqvrHwfcIapMeTIpaMcVZS9QqWPS2UwZh9by6adrYTuXEF4EonE8BdXky1QzI83fXuUARogR2O%2BgwCgbtuUwLOrWhiIXXvMj48h%2BZ2wmjbqVJdBkmpVXa2bC1GnxuRVP56LuyHjVSR25NG90czCqljJDeKhjb7cZcHovbLJMTcm%2Byn5QKrtSdX03SLpBJ3w2Sm6MSv0kPckv5Km52p0d1X5vVS5wmuYo2nhLEQ0UJsAj9eW1QakDFIcyxeguLALFUEYDdCc7JooqMFFQofld1%2F%2BL0SEhIExYM41x6Shbsc407LDmROq3%2BF94%2BF5y2agovPl6DPcM8io7N0nJEoqjwqIJYZudsZcFgz9f33yj4rtBU2ZE2LpP2WGrnIMOHkvckGOqUB2lZnahFdSd3H0SF4foI6Jx%2BKjWV3I9jThRPWb4SsjlcsyzX3huar8zLZczgrAOY3VrI3g%2BlJ5gmovNI%2FZ4Qgu1eNNG3%2FBJNg1ZR8yOitjALdmmEWEirSAeUr2WfjtapRbXc3lwGOnSye2YGwXk6%2Falf155h38s%2FYa7UMl8WyT3SBDOqOX55LU4kYAKBmKkGrkWfkpNbpj7OuJE4AUlo1hd4NMvGh&X-Amz-Signature=bae1916463b2e5b09a0a806b09ecacfa24349d971bf18f3858f92e1201dcd49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RORBRPWO%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBQvLQDN0PYuvaTE%2Bn%2BMOmiPcKKftdgF%2FHtwKYFqxAU9AiEAs8umz6wIricCLCO%2BbcY1e9J4jvPTaENp2g49T%2Fc6f%2FYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJTmW7iGXCR0HUMXuyrcA7Bpp%2BJ%2BdI%2FhZQpQ722H%2FWCjLCVhJBFqxJjgO152fHy6lsZszTMFhaWfWgSOyaQCdoPX0ISzy5MpOxOh0lDOjKxhACZKu6t8ihSsVwIcyL2R16D7c1l%2FlGtl9qe57Cr2wsF8KKQotyP%2BBI10UlC3w4WetqZZ3106w2mEGXSaxIsvVtMXTk2pSm%2B%2FVJEK%2F6Nlz8crx7qxJ5MhXJ5IR%2B9wo2dpn3%2BlHgFUqh6TRx0yY27XPJPSxtMHtSV7yQ5RnvzSw6eqvrHwfcIapMeTIpaMcVZS9QqWPS2UwZh9by6adrYTuXEF4EonE8BdXky1QzI83fXuUARogR2O%2BgwCgbtuUwLOrWhiIXXvMj48h%2BZ2wmjbqVJdBkmpVXa2bC1GnxuRVP56LuyHjVSR25NG90czCqljJDeKhjb7cZcHovbLJMTcm%2Byn5QKrtSdX03SLpBJ3w2Sm6MSv0kPckv5Km52p0d1X5vVS5wmuYo2nhLEQ0UJsAj9eW1QakDFIcyxeguLALFUEYDdCc7JooqMFFQofld1%2F%2BL0SEhIExYM41x6Shbsc407LDmROq3%2BF94%2BF5y2agovPl6DPcM8io7N0nJEoqjwqIJYZudsZcFgz9f33yj4rtBU2ZE2LpP2WGrnIMOHkvckGOqUB2lZnahFdSd3H0SF4foI6Jx%2BKjWV3I9jThRPWb4SsjlcsyzX3huar8zLZczgrAOY3VrI3g%2BlJ5gmovNI%2FZ4Qgu1eNNG3%2FBJNg1ZR8yOitjALdmmEWEirSAeUr2WfjtapRbXc3lwGOnSye2YGwXk6%2Falf155h38s%2FYa7UMl8WyT3SBDOqOX55LU4kYAKBmKkGrkWfkpNbpj7OuJE4AUlo1hd4NMvGh&X-Amz-Signature=18866407e4ff855566bfcf81f77aa51923faba35a7ee36935ef749f9df6d9df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

