---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSBSV35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCp%2BzHurzkeRkNCCAuMoi4BFgxd7JFu7a7Ku4qD2NBAiEAt9dB%2FuOdPYeG88SUQojPWizkj6%2FsliXSlqL8g9%2BUx0Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCuVOKaMHUrG15bW6ircAwI0Db07ZKJHgQ3fLMKz7vYJLJ4ZjHcwEZqYxuFoPIM%2FvKww2dJz%2F5w5hZAT18kyJ8D%2FA61%2FJ2g%2FX56%2FVxh6w8vjyn59CcyuY3joYqLFdys%2F6Zm%2FAOhPjs05AEDj4JqxwdaNis89ufe2eQH%2BrfsUbL2cyPIYnv8drgzui0rg5DKjJRXV1LMnxaFjgFGQ%2F1w%2F2HmhLqvCSokkWsE6DQ%2BbhhDLYIEtD1HCzQ1PJJ3WZrXHxrqDrA%2B3Ytx3Wo7sAS%2FrpkOpz6W000ny%2BwrSpRLXhK3XwTwsFefPory90oF%2FWTmh0ZvIY%2BfW%2FG2O5OXZR%2Bmd4DTa1%2FFALgg5Ryg2JSPvXlF01rsTU48sIzg5M%2FRSL9Qub1tQ4lMpOYR%2BxxJEtkY5L3QTvRDYiWeR63MIOvesrBTEznHa%2BNxJm1F4hZ02g7uS2f0NnQkYR0yXRZ4K7wBS7ljW0mXegTbqL3cqywtpvo0YspogvrQMGn2zSXRxbfgmDEYK0ACWrKO%2B7fgQEadAOUiwC%2F%2B8K1Hq7CSaIT1uIeMKUIR%2B1qainzoMKHhCrvBMz7yvkzPUnP%2BGGMBG4SAkY20xxtRmiMmKcRe89DG7suT51vRdQZk2p4IzlMuWWDflPMGK6SggYbk9SuxMMPWm0MkGOqUBhcOBbHuX1qq%2F5hpBOEUFPzQu4Pg3TdRzsJU4pFmKbj5H%2BMSwgHK4jPzMIGORh2y0jG5sR14Pb7XQp9I%2Ff7rrGaEzRefw3CQ9ncFT60RKbjlR%2BuTdyQBVOdLG4173TKfjjDHDn2Qv7XHtXmLn6Hwb6F3mD44u%2FE9FqKODyeIS7L7EGfvnRTLKnhlG4v4OWWpAsBCWK5ubZ2fD0qbhrSfQjRnb6wR%2B&X-Amz-Signature=aee20f6eee32dd7fcbefcc3c4ca951a7a81d571fbe36394fcdf51437c053135e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSBSV35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHCp%2BzHurzkeRkNCCAuMoi4BFgxd7JFu7a7Ku4qD2NBAiEAt9dB%2FuOdPYeG88SUQojPWizkj6%2FsliXSlqL8g9%2BUx0Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCuVOKaMHUrG15bW6ircAwI0Db07ZKJHgQ3fLMKz7vYJLJ4ZjHcwEZqYxuFoPIM%2FvKww2dJz%2F5w5hZAT18kyJ8D%2FA61%2FJ2g%2FX56%2FVxh6w8vjyn59CcyuY3joYqLFdys%2F6Zm%2FAOhPjs05AEDj4JqxwdaNis89ufe2eQH%2BrfsUbL2cyPIYnv8drgzui0rg5DKjJRXV1LMnxaFjgFGQ%2F1w%2F2HmhLqvCSokkWsE6DQ%2BbhhDLYIEtD1HCzQ1PJJ3WZrXHxrqDrA%2B3Ytx3Wo7sAS%2FrpkOpz6W000ny%2BwrSpRLXhK3XwTwsFefPory90oF%2FWTmh0ZvIY%2BfW%2FG2O5OXZR%2Bmd4DTa1%2FFALgg5Ryg2JSPvXlF01rsTU48sIzg5M%2FRSL9Qub1tQ4lMpOYR%2BxxJEtkY5L3QTvRDYiWeR63MIOvesrBTEznHa%2BNxJm1F4hZ02g7uS2f0NnQkYR0yXRZ4K7wBS7ljW0mXegTbqL3cqywtpvo0YspogvrQMGn2zSXRxbfgmDEYK0ACWrKO%2B7fgQEadAOUiwC%2F%2B8K1Hq7CSaIT1uIeMKUIR%2B1qainzoMKHhCrvBMz7yvkzPUnP%2BGGMBG4SAkY20xxtRmiMmKcRe89DG7suT51vRdQZk2p4IzlMuWWDflPMGK6SggYbk9SuxMMPWm0MkGOqUBhcOBbHuX1qq%2F5hpBOEUFPzQu4Pg3TdRzsJU4pFmKbj5H%2BMSwgHK4jPzMIGORh2y0jG5sR14Pb7XQp9I%2Ff7rrGaEzRefw3CQ9ncFT60RKbjlR%2BuTdyQBVOdLG4173TKfjjDHDn2Qv7XHtXmLn6Hwb6F3mD44u%2FE9FqKODyeIS7L7EGfvnRTLKnhlG4v4OWWpAsBCWK5ubZ2fD0qbhrSfQjRnb6wR%2B&X-Amz-Signature=49428003d46020e2e8f355cd838706a4ca0986085ea1673fc546d1b34b2a669b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

