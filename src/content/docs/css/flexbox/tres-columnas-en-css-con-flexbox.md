---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653H6ZDEZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNsMO%2BuvPFmU%2BE5jk%2FvJF1sNeHvJDNmqYUb8h2DOzn3QIgAPkbV3YMRDshd0b4X%2F9zXuPPybAr3%2FiWN%2BsYbRH5eigq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO07A%2BrahDUjpWbYzSrcA23ryjjjUV4jfCyYpjGpUfArzsKNoENRgSMMjB%2FPLwNLEK5TKJEt9pze1RzUWoY1zXFPX26ln%2Bt8wDXIPGwdF4JYRM%2FFr8GchN73kvwxN%2BMiD4gHnD%2BpZ4PESD2n9xoyXXG9RXJEuGvrlBitx6UvpVKxt1v067fUcIWHOXuLOZ56Jrva%2BnNT49MTKcLZWMYXPi7%2FI%2BHGkkVBbWcqG1dsmUso97hXTiHVPEPoIhqOvrw0cxGzvRE1%2FbCT%2FyU8OP%2FPdbQqSCPSqgaUu%2BrG54%2Fkhqh1KGTYgZ5OY3Hq3X%2BJ95X5UmpgFNtXP3Li5iCVfxILH6CyXvWPiyrnmA%2BaE5Pf1bPEHVG46GjO9RQ4XOQtBDUW%2Biu2jkvGkjzQOGfXOUvFPejxWqQyxpYxzUWucw2eDC3tuhr59hfhHQMKBToliaDkH%2Fa4ERT3Fj1UvXxihFDFep7sMx2zxEr1fD8KXzo5HrNBe0CrxZC7LZmb4iWGZphhKz7JDAaJTXkj749KhVo5xjRHcQi9i5IerFD%2FAcR190M2awN5vKzpcu2ZUrCi7HAYERuC6CFM5LqmtIHmfUCX1%2BhhEz1eUA4kDrxAnB%2F0TxG4THHrSPr7maLl4B1wYbqQeC5ZkeGmcvixoH%2FXMJDezskGOqUB%2Bkif%2B8n7BkdLfM6Wslkek0mub0FXJTCDbg2e34CSkEVRfsLZI2BMvIA9KubxzhSEMh7X0MMXa3pOomNd6iNI8PLbPgihW9gl0j1vnLNyhqMBfsnrnereIS501Px5UwA0ljAoAlY19v4WYDaYVmhLNpunNUE9dqVL7YDbu084sH3EI55YTgGkv%2F%2BIX%2FYa3JzS%2B9xM52Zq%2FyE3JSUUjiuHtichhAEi&X-Amz-Signature=bff49d0af7723d1622345407deab73d3ee714fd0448eea08ce909f6f46e9d9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653H6ZDEZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNsMO%2BuvPFmU%2BE5jk%2FvJF1sNeHvJDNmqYUb8h2DOzn3QIgAPkbV3YMRDshd0b4X%2F9zXuPPybAr3%2FiWN%2BsYbRH5eigq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO07A%2BrahDUjpWbYzSrcA23ryjjjUV4jfCyYpjGpUfArzsKNoENRgSMMjB%2FPLwNLEK5TKJEt9pze1RzUWoY1zXFPX26ln%2Bt8wDXIPGwdF4JYRM%2FFr8GchN73kvwxN%2BMiD4gHnD%2BpZ4PESD2n9xoyXXG9RXJEuGvrlBitx6UvpVKxt1v067fUcIWHOXuLOZ56Jrva%2BnNT49MTKcLZWMYXPi7%2FI%2BHGkkVBbWcqG1dsmUso97hXTiHVPEPoIhqOvrw0cxGzvRE1%2FbCT%2FyU8OP%2FPdbQqSCPSqgaUu%2BrG54%2Fkhqh1KGTYgZ5OY3Hq3X%2BJ95X5UmpgFNtXP3Li5iCVfxILH6CyXvWPiyrnmA%2BaE5Pf1bPEHVG46GjO9RQ4XOQtBDUW%2Biu2jkvGkjzQOGfXOUvFPejxWqQyxpYxzUWucw2eDC3tuhr59hfhHQMKBToliaDkH%2Fa4ERT3Fj1UvXxihFDFep7sMx2zxEr1fD8KXzo5HrNBe0CrxZC7LZmb4iWGZphhKz7JDAaJTXkj749KhVo5xjRHcQi9i5IerFD%2FAcR190M2awN5vKzpcu2ZUrCi7HAYERuC6CFM5LqmtIHmfUCX1%2BhhEz1eUA4kDrxAnB%2F0TxG4THHrSPr7maLl4B1wYbqQeC5ZkeGmcvixoH%2FXMJDezskGOqUB%2Bkif%2B8n7BkdLfM6Wslkek0mub0FXJTCDbg2e34CSkEVRfsLZI2BMvIA9KubxzhSEMh7X0MMXa3pOomNd6iNI8PLbPgihW9gl0j1vnLNyhqMBfsnrnereIS501Px5UwA0ljAoAlY19v4WYDaYVmhLNpunNUE9dqVL7YDbu084sH3EI55YTgGkv%2F%2BIX%2FYa3JzS%2B9xM52Zq%2FyE3JSUUjiuHtichhAEi&X-Amz-Signature=2afec6174b56b2493373ef2091d351cce44808e489fa69120d488cee8313a38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

