---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MS5QZM7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0ldH2ecT%2Fy%2FcVtv7LxAlbbpcH6dGve2QuMsSHNWO2TAiEAmdHA0RLsbPqTvtaEWDtWtpAetPpK5D9aWj1E8cgX7Vsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI%2BJtG%2B9sggJUVqgtircA%2FvgUolYlqJ0xMA3OotHKex8a8NsU2OwS4ATxtaNebN8DI%2FrHrKHIuFWI%2B6WZGqNxoWT5rPF1X7klk%2FJ2euNKV4pTVOsADKeS%2B6rfa%2F6I3mXbERFkcLa5%2FotHBaVyDMtOZh%2F0X%2BectO3bxqtvWTxXZ0fihqtdX1Msj8216%2FbCKjmsn8osnFz6xUV9XnZ9ZDy2oRdJWSjGTP%2Brw2hAxsmzx43WUxUowrQ9lMdE6rsqyzWtN0AoOWnggU2LChShRP79Tr4Od2X7a1rg3MOpdSjbC6EWFsgIJgjwmZ%2Bh2ck5qk0wqawV%2BhPNvupW6dC6gdWBR9aSBvLS00QBn1%2F1reKraesObkTWyEphrpLNS5HUdEuQusPVnM21xYdvJBBxMpVo4CYDLZXZlHb4tfgEQN0lgSkMpXBmZdEN4AeH0lQ4sOVtuQGUCLSTxPvc4dOK%2Bfu%2BzK2CSI5Rti9MK8PP7T1Lh36dFwlX2cE2MNILLhxi%2B5dUOvwr81t7JeWFu08BFsM5m2DNiAYmLbkrwI6UUPRC9vrLlQm07mX7ZNm5094xYd9VsCItH9ds49rcDYlfX28WbB1Jhrfcy0aii8X9AZuAHk%2BM7%2FLB4BBM2LNEEd1zP1TkCZw4HFVODZwtn2gMN2J0MkGOqUB7TUgl%2B6xvxWm5vVfb%2B3kbr4Nqf0OHykUToqLqMaqOzeRDvn68M1dZ8h9I%2Fg%2BFISDrmWUqfOEnsdCJ%2F2Wpke1BE7TmHSQ4Qwim0%2BKxK530QJqzf2ggYC6MIvAA0WsGB3UU5xZUxHUh2w2ACf7CquXGk1F3u8NAXHgf68QtmMS8oMQd8N3KGmfIMwvl3GYeEvPGYF87YT5HMJz8MelRnMHkNu%2F9jWd&X-Amz-Signature=5c2ef460b63a22859cf72af4159a8abeacc96cc54270fe1a3250171d5803e69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MS5QZM7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0ldH2ecT%2Fy%2FcVtv7LxAlbbpcH6dGve2QuMsSHNWO2TAiEAmdHA0RLsbPqTvtaEWDtWtpAetPpK5D9aWj1E8cgX7Vsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDI%2BJtG%2B9sggJUVqgtircA%2FvgUolYlqJ0xMA3OotHKex8a8NsU2OwS4ATxtaNebN8DI%2FrHrKHIuFWI%2B6WZGqNxoWT5rPF1X7klk%2FJ2euNKV4pTVOsADKeS%2B6rfa%2F6I3mXbERFkcLa5%2FotHBaVyDMtOZh%2F0X%2BectO3bxqtvWTxXZ0fihqtdX1Msj8216%2FbCKjmsn8osnFz6xUV9XnZ9ZDy2oRdJWSjGTP%2Brw2hAxsmzx43WUxUowrQ9lMdE6rsqyzWtN0AoOWnggU2LChShRP79Tr4Od2X7a1rg3MOpdSjbC6EWFsgIJgjwmZ%2Bh2ck5qk0wqawV%2BhPNvupW6dC6gdWBR9aSBvLS00QBn1%2F1reKraesObkTWyEphrpLNS5HUdEuQusPVnM21xYdvJBBxMpVo4CYDLZXZlHb4tfgEQN0lgSkMpXBmZdEN4AeH0lQ4sOVtuQGUCLSTxPvc4dOK%2Bfu%2BzK2CSI5Rti9MK8PP7T1Lh36dFwlX2cE2MNILLhxi%2B5dUOvwr81t7JeWFu08BFsM5m2DNiAYmLbkrwI6UUPRC9vrLlQm07mX7ZNm5094xYd9VsCItH9ds49rcDYlfX28WbB1Jhrfcy0aii8X9AZuAHk%2BM7%2FLB4BBM2LNEEd1zP1TkCZw4HFVODZwtn2gMN2J0MkGOqUB7TUgl%2B6xvxWm5vVfb%2B3kbr4Nqf0OHykUToqLqMaqOzeRDvn68M1dZ8h9I%2Fg%2BFISDrmWUqfOEnsdCJ%2F2Wpke1BE7TmHSQ4Qwim0%2BKxK530QJqzf2ggYC6MIvAA0WsGB3UU5xZUxHUh2w2ACf7CquXGk1F3u8NAXHgf68QtmMS8oMQd8N3KGmfIMwvl3GYeEvPGYF87YT5HMJz8MelRnMHkNu%2F9jWd&X-Amz-Signature=23c3bd8b565bda9e3de309462d86b8601d2b476b13baa1585f30702bff532503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

