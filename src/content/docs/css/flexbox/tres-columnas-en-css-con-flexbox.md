---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3FB5QG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHljkVKL1PnCcZcDU8MEAx54CQNjuo0GQiB4pD3FuAZAiEAlIEqw42%2BqsB9%2FNvrCjUzMY1iQM%2BSJZ4rhMHOrOLjYEEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGkcCckhNxbKGHqWSrcA7mg1bvL5lhv3THhstlNntyly7ll8bNfBLlzAGPp3wHWbxk5fO7u6619Jlaz7xuesdZrDbO2JijV34qplLUvrFbwQylo5gGYX%2BSVZiisrB5UhvvKCKwTE5S1LiwPK8f8QAusAMySuq6GCdFYuQ9L%2BKGedBUrU6P%2BLis3pRIDcVrkEoST0CGFQm50bpv%2B3DO86YyRdYh3TfvWToxWubzfNJHAR2EG0emgJ6GziT6CybE7Wn8v8MC1TFJ7AT2v7X9KwPFmMbD0RMAngwgIU5hNIG98FmAs4447dlYPRtq65q8chmB9aFaMXfMlJ%2Fx9tMnAuVHlNDrhE2DyeryoFwD%2BzKzFJf9S8DJouWqpDWsBu90vJBVulY0tzV5MD1q7IdGR7s70XNMF7xvZbxRxa2q9UthLZwixkef8wbDmc12t2G4OuCqCPC0BtFmPIf3BY6ko4YHsHhx53sosaqeyF00Fn1IZVLIrjMJC1uTLl5G8VDv0pCHqRFUVxbATjbFlNmSE%2FZGPnM9AGbxWgDCiuCshxi38a%2FmkvWLFRPNCiLhgBwuEokYj5uz3ypXRL4Olzm%2Fg2BRjbwCxAI9ENCC0W5I4GUGRrWdfMJtE2Ll%2FOJBmImuijgdrK%2F%2FCZxckyFvhMPvP2ckGOqUBvAqF2EIpW5s3SUrhVILIAVrSix4FM%2FKVavRYpVYe0gWdJJFncJswCogI5q8VaFVno6FT7PxmmFamseYMXJdXELE2PBzMA3BtcYzOau0HO%2Fxwtq03ggqoYyEMXfoUPa2MOqktY8JNpDdWXimjw%2FH96vL6F589%2FAGP%2BM6HjTCWCGaGK9RO%2Bf1KjquaJNAgj5MTybaHL70dfxLh9jrj9XqnklmqXk3f&X-Amz-Signature=956bf67a647b296ee73ccbd4287686ff71b2064fe18afc80d7996b3af8645e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3FB5QG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHljkVKL1PnCcZcDU8MEAx54CQNjuo0GQiB4pD3FuAZAiEAlIEqw42%2BqsB9%2FNvrCjUzMY1iQM%2BSJZ4rhMHOrOLjYEEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGkcCckhNxbKGHqWSrcA7mg1bvL5lhv3THhstlNntyly7ll8bNfBLlzAGPp3wHWbxk5fO7u6619Jlaz7xuesdZrDbO2JijV34qplLUvrFbwQylo5gGYX%2BSVZiisrB5UhvvKCKwTE5S1LiwPK8f8QAusAMySuq6GCdFYuQ9L%2BKGedBUrU6P%2BLis3pRIDcVrkEoST0CGFQm50bpv%2B3DO86YyRdYh3TfvWToxWubzfNJHAR2EG0emgJ6GziT6CybE7Wn8v8MC1TFJ7AT2v7X9KwPFmMbD0RMAngwgIU5hNIG98FmAs4447dlYPRtq65q8chmB9aFaMXfMlJ%2Fx9tMnAuVHlNDrhE2DyeryoFwD%2BzKzFJf9S8DJouWqpDWsBu90vJBVulY0tzV5MD1q7IdGR7s70XNMF7xvZbxRxa2q9UthLZwixkef8wbDmc12t2G4OuCqCPC0BtFmPIf3BY6ko4YHsHhx53sosaqeyF00Fn1IZVLIrjMJC1uTLl5G8VDv0pCHqRFUVxbATjbFlNmSE%2FZGPnM9AGbxWgDCiuCshxi38a%2FmkvWLFRPNCiLhgBwuEokYj5uz3ypXRL4Olzm%2Fg2BRjbwCxAI9ENCC0W5I4GUGRrWdfMJtE2Ll%2FOJBmImuijgdrK%2F%2FCZxckyFvhMPvP2ckGOqUBvAqF2EIpW5s3SUrhVILIAVrSix4FM%2FKVavRYpVYe0gWdJJFncJswCogI5q8VaFVno6FT7PxmmFamseYMXJdXELE2PBzMA3BtcYzOau0HO%2Fxwtq03ggqoYyEMXfoUPa2MOqktY8JNpDdWXimjw%2FH96vL6F589%2FAGP%2BM6HjTCWCGaGK9RO%2Bf1KjquaJNAgj5MTybaHL70dfxLh9jrj9XqnklmqXk3f&X-Amz-Signature=3586ef64f88e3d4db924fecf764a476b62c7df9239fdc820d3f05b5c865d2d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

