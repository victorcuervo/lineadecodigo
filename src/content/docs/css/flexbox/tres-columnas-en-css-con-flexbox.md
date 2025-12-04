---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HIA4RQQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD1FH1iZhNjsJSz1V5Az5rY7UyrbAjpfk3OXevUrd35dAIgVkU47Gmnn7MmNC5id9RuMoIM5L9Q8axrHziCg74utq4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP46Ih2N%2FkkzAz1hSyrcA5%2Fgd%2FUumouY52qKRcVVLGx21DPZWPvAuFXjah5MMSIqqvRO4GgZNJ2L6qjd99XHE02oAlyI4HCDFdcWv258XpJJQFtyIiAnm5W4OZE7HyaTqogOi4jyAm%2B9QEiv%2FKd5EDn34rz6rwxn9EOvC2kNDEmKo7WRYVaXX1G132Nba85VYGC%2By1ksEP%2Fbix6pYdg0POZiZ9JMXSPCGUwki5rITDq0j05Hdz3LwQEo0qaNDMn26wBbQAFVwhPe9JlGFfMf%2Bdmp1tjl%2Ffxl7SOesyv4HTvR5h1MKHkfcK%2FZ8OFuHkxiYGuc67L7w1ngbhRvIjBpulyQNmPX4rFaKmFPf87COe2hXOU9pSmcxzaVZI2gPdWmcxWmIouWLIDzV%2F7fJpidX1pJojnlMD85Yfy4%2B5%2FLlcILeYApAncExdepu5E1oZ%2BThFxRiHrN9HKlcRg4FGQmi1CW95sPQwUP0m81rNpCTBbooKbz1Uzf70gaDozCLFlZkFPv%2BbadU7s2w%2BhpuIHrR6Fiy%2BZDt%2BK7zLuSLADibWyQhdtaoFoJxS1O8FSCaTC5id7g7SLxVwm6ewWSfyGxBpZAFhst4%2FqexWugJxNo8BWAui9u34uz8hcPgd%2FAV5ldPvdLuAf%2BpkNfd6CkMJ2DxskGOqUBVCK%2BaLNmEpSNMkUuAPLj3uTjM3MIrRCA0m70AvOlR%2F%2FySP3MSTkcMM%2B78Fu8FPKYZz1c2%2FZ0kIlnmetd1dS20K%2F7Pnmml6xpcUjbM%2F2suzlkY8rW7VdbZa7CRhFYjiCwIm1Wf0HKgkStbvjH9wJrPvnWyo4yzYIdnCql%2BTLm5%2FBXTUnzOYXXMkOMc%2FokExxeqipqrGz2a8WFTNnFh69p9GBQ6sig&X-Amz-Signature=28bd8531a7d228a98ab0230d0149d7bb4ff195e4c09e802e4adee496dd191217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HIA4RQQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD1FH1iZhNjsJSz1V5Az5rY7UyrbAjpfk3OXevUrd35dAIgVkU47Gmnn7MmNC5id9RuMoIM5L9Q8axrHziCg74utq4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP46Ih2N%2FkkzAz1hSyrcA5%2Fgd%2FUumouY52qKRcVVLGx21DPZWPvAuFXjah5MMSIqqvRO4GgZNJ2L6qjd99XHE02oAlyI4HCDFdcWv258XpJJQFtyIiAnm5W4OZE7HyaTqogOi4jyAm%2B9QEiv%2FKd5EDn34rz6rwxn9EOvC2kNDEmKo7WRYVaXX1G132Nba85VYGC%2By1ksEP%2Fbix6pYdg0POZiZ9JMXSPCGUwki5rITDq0j05Hdz3LwQEo0qaNDMn26wBbQAFVwhPe9JlGFfMf%2Bdmp1tjl%2Ffxl7SOesyv4HTvR5h1MKHkfcK%2FZ8OFuHkxiYGuc67L7w1ngbhRvIjBpulyQNmPX4rFaKmFPf87COe2hXOU9pSmcxzaVZI2gPdWmcxWmIouWLIDzV%2F7fJpidX1pJojnlMD85Yfy4%2B5%2FLlcILeYApAncExdepu5E1oZ%2BThFxRiHrN9HKlcRg4FGQmi1CW95sPQwUP0m81rNpCTBbooKbz1Uzf70gaDozCLFlZkFPv%2BbadU7s2w%2BhpuIHrR6Fiy%2BZDt%2BK7zLuSLADibWyQhdtaoFoJxS1O8FSCaTC5id7g7SLxVwm6ewWSfyGxBpZAFhst4%2FqexWugJxNo8BWAui9u34uz8hcPgd%2FAV5ldPvdLuAf%2BpkNfd6CkMJ2DxskGOqUBVCK%2BaLNmEpSNMkUuAPLj3uTjM3MIrRCA0m70AvOlR%2F%2FySP3MSTkcMM%2B78Fu8FPKYZz1c2%2FZ0kIlnmetd1dS20K%2F7Pnmml6xpcUjbM%2F2suzlkY8rW7VdbZa7CRhFYjiCwIm1Wf0HKgkStbvjH9wJrPvnWyo4yzYIdnCql%2BTLm5%2FBXTUnzOYXXMkOMc%2FokExxeqipqrGz2a8WFTNnFh69p9GBQ6sig&X-Amz-Signature=b6f8274e0e8600a97598a8f9ca50e84f8f8dad2258a0a3ac8204fc1d69527ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

