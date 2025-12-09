---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ64IXPA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfHjT5Dm1%2FK18F1RL8XjqQtYkR1Rd2GxgO0C6GtKVwFAiAiHb7Fb7kT7ySzhjxiauOtV%2BdP4KqHLm2vYMeYCXaHbCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1lKCNti%2Fq3FNA6ZlKtwD7bCnNFgeGRalK3PfQOPn8LTFApb5Oya6Iu3mmq2GTjd6ZospkLP2AWs9BorS98ic7pnvs8xEgLLPqTwIBDx9ZhF3PIF3%2BkF1hYdPy7xviVY%2B7NGcfrtNXwOfOG6i7jDHEq7OpARAgWSS9m%2F4ZCElc7iY84ekBv35DrOQ4xyZ7gYNWA8RJx4JyqFJEgxMNTxKstNdVrum8hGKywaZLyqxSNfhTohbP6%2F2eraxthJY3ZXHQ39hfNZXtRmD727L8MdYUDG7wie0K%2FzVbxbibLEVYpT9e6uSn%2FPaA2YvVryA5nV6EWWDGCFvHOCq4Qm%2FWUrPvZcMZirBAxg9JpHy%2F12JKI7Qv9XM3G3Ee8NxBhovo4Jzv3zYpleAsKXS8%2B9PVSJ50ZEa8NYsC0e8JNSxcL57KjFUQ04UNO05sTnR1D88MCuSPQieXmcanv960JfAp%2BnmJ5vPNMAEXZ9DptyfZXi1mnlevMWJRr04oBxWnxgMsuaVOF4Ly5G1FFdL%2Bcjw3Pplu8ROFE5L1KL6pIWmhwCHK%2FkZ9Rjseuc4EjKXFSgQ6K%2FDMIyoGgYzDhI905mWMllX4KvAV7GHR0vmuDCsOY1aKtdli24JK6RjOePm9POf7Q72F%2F3GIchieIM9zZ8w5sLdyQY6pgFf4EBS6VjLOFIkDyBTy9GfP5ekIC4PvNm0Kybep%2FUV1CyWdx%2B1biriResveYPcyh84wSLWGnhsdwmm3wiR6lJ114SGLPReNzyAjf1BBm1o5OONkeY7EZ0DQoMSvp%2FSJPOrFVvUoNm2TMQ8xmI5dGKqI1kbRmx7FQ%2BqE41tTgggKzSwFaSnI1b4SS9TC%2BIj9LYdCNfzNc9XcNLkeEUP8NwHkB%2FPTXOv&X-Amz-Signature=b70f18d697361abc1a519826fd2d471f3fe39182a9fb15065e042ba7c28d132a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ64IXPA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfHjT5Dm1%2FK18F1RL8XjqQtYkR1Rd2GxgO0C6GtKVwFAiAiHb7Fb7kT7ySzhjxiauOtV%2BdP4KqHLm2vYMeYCXaHbCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1lKCNti%2Fq3FNA6ZlKtwD7bCnNFgeGRalK3PfQOPn8LTFApb5Oya6Iu3mmq2GTjd6ZospkLP2AWs9BorS98ic7pnvs8xEgLLPqTwIBDx9ZhF3PIF3%2BkF1hYdPy7xviVY%2B7NGcfrtNXwOfOG6i7jDHEq7OpARAgWSS9m%2F4ZCElc7iY84ekBv35DrOQ4xyZ7gYNWA8RJx4JyqFJEgxMNTxKstNdVrum8hGKywaZLyqxSNfhTohbP6%2F2eraxthJY3ZXHQ39hfNZXtRmD727L8MdYUDG7wie0K%2FzVbxbibLEVYpT9e6uSn%2FPaA2YvVryA5nV6EWWDGCFvHOCq4Qm%2FWUrPvZcMZirBAxg9JpHy%2F12JKI7Qv9XM3G3Ee8NxBhovo4Jzv3zYpleAsKXS8%2B9PVSJ50ZEa8NYsC0e8JNSxcL57KjFUQ04UNO05sTnR1D88MCuSPQieXmcanv960JfAp%2BnmJ5vPNMAEXZ9DptyfZXi1mnlevMWJRr04oBxWnxgMsuaVOF4Ly5G1FFdL%2Bcjw3Pplu8ROFE5L1KL6pIWmhwCHK%2FkZ9Rjseuc4EjKXFSgQ6K%2FDMIyoGgYzDhI905mWMllX4KvAV7GHR0vmuDCsOY1aKtdli24JK6RjOePm9POf7Q72F%2F3GIchieIM9zZ8w5sLdyQY6pgFf4EBS6VjLOFIkDyBTy9GfP5ekIC4PvNm0Kybep%2FUV1CyWdx%2B1biriResveYPcyh84wSLWGnhsdwmm3wiR6lJ114SGLPReNzyAjf1BBm1o5OONkeY7EZ0DQoMSvp%2FSJPOrFVvUoNm2TMQ8xmI5dGKqI1kbRmx7FQ%2BqE41tTgggKzSwFaSnI1b4SS9TC%2BIj9LYdCNfzNc9XcNLkeEUP8NwHkB%2FPTXOv&X-Amz-Signature=5038e5c1fc9c9075d28e0231c72d61b99177819e19d99df8844c983c889ca2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

