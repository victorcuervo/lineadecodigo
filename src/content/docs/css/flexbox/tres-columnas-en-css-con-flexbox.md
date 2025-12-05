---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMSSNM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmZKEkE67XsChFmYMsM2GIAEhqUZc5Z8WrO1rj%2Fur44AiBlUslH8RT%2Bwp39iThS8jbFRsS6s9%2BxrQOsUvSNxqcSwCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMbye%2Bl6iS5xL1g7gOKtwD25WXriTg7%2F3SvVoLzYIFRafpv0UpnT3AveKa6b4h3rO7yV%2BAIdF9dLNKhplNTMFkcB3FAbUUSDZreCX%2F%2FcuQcnX1Rmz5rnmyKjgo6xEwvDaDbQAMYCc7kCFgCiaMkUhF4cqAZByfdUvU1mzeD2QlAHHVs5ZxKjfjGF%2FxfOGHAK01cyIMAWVW5fkZRdnZdunws%2FWBE6%2FsNi2sBKLEuf8vwmoB5KYNSZNQqPUH1d%2BVHCj2pNNx42XMB%2B2pyygbCQ9HKThY%2BYz99MFrF8DAEuTH9bl%2FPEwjaJ14pD%2BN%2F%2Bg3%2FB311QEeW79ac4vozlAFmIv%2BabyoPf2oHtMv%2BUI75UdZmkK5FYOyESj5rJR0ZJwqdQAmIX0cz71X2W%2F0YYI5bDbD6rfq4apPTV4rO48RMzOPJMaIDtlgMLd7YS1MfePaoLkxgiFpUAkZx3MDfdzfOKU%2BznQxwMNg1iPYcND2nMzt1WLZjBfIVJQOZeMkW5d%2FzB7zo5LmStZ3hy9%2BLNerkShLgkIAWC8YuO79UqqXv9OGXCaRUlGykB3uwfaAKuTKtpXT5%2BAh%2B7uEgjt53emsf9s0lN4N92R9EOweltpgjGztG7dPpBCKP%2Fwlf%2B5QPBJ3n3Ry%2Bh2mptyQ%2FpDT6PkwssbNyQY6pgEJnLaGFtKVdiWPTQrGcja2Yc91ERSveogvCVSw3OGhZZf4UR6FsWM8tAhjEqG2Ju%2Bw2TZ5MAbWWmk3e9%2FlZ25s1lO3nkQvFUk8rGayjSwVj6TmhkS2Pl4YKDIBJyRieA7WeRvBOXvNPkDmnABMU4wj7qI9lNhm78xvJEJ2TQbW0m4CWBGDoKmyD8I37IRnjCU%2FYbA3ibl3PNs%2FKVUvRRsm5tXjET4V&X-Amz-Signature=b1b7d6ab6f0df6837748991b4a789b08102c00d0be8e15e0b342242929aa72f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDMSSNM2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmZKEkE67XsChFmYMsM2GIAEhqUZc5Z8WrO1rj%2Fur44AiBlUslH8RT%2Bwp39iThS8jbFRsS6s9%2BxrQOsUvSNxqcSwCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMbye%2Bl6iS5xL1g7gOKtwD25WXriTg7%2F3SvVoLzYIFRafpv0UpnT3AveKa6b4h3rO7yV%2BAIdF9dLNKhplNTMFkcB3FAbUUSDZreCX%2F%2FcuQcnX1Rmz5rnmyKjgo6xEwvDaDbQAMYCc7kCFgCiaMkUhF4cqAZByfdUvU1mzeD2QlAHHVs5ZxKjfjGF%2FxfOGHAK01cyIMAWVW5fkZRdnZdunws%2FWBE6%2FsNi2sBKLEuf8vwmoB5KYNSZNQqPUH1d%2BVHCj2pNNx42XMB%2B2pyygbCQ9HKThY%2BYz99MFrF8DAEuTH9bl%2FPEwjaJ14pD%2BN%2F%2Bg3%2FB311QEeW79ac4vozlAFmIv%2BabyoPf2oHtMv%2BUI75UdZmkK5FYOyESj5rJR0ZJwqdQAmIX0cz71X2W%2F0YYI5bDbD6rfq4apPTV4rO48RMzOPJMaIDtlgMLd7YS1MfePaoLkxgiFpUAkZx3MDfdzfOKU%2BznQxwMNg1iPYcND2nMzt1WLZjBfIVJQOZeMkW5d%2FzB7zo5LmStZ3hy9%2BLNerkShLgkIAWC8YuO79UqqXv9OGXCaRUlGykB3uwfaAKuTKtpXT5%2BAh%2B7uEgjt53emsf9s0lN4N92R9EOweltpgjGztG7dPpBCKP%2Fwlf%2B5QPBJ3n3Ry%2Bh2mptyQ%2FpDT6PkwssbNyQY6pgEJnLaGFtKVdiWPTQrGcja2Yc91ERSveogvCVSw3OGhZZf4UR6FsWM8tAhjEqG2Ju%2Bw2TZ5MAbWWmk3e9%2FlZ25s1lO3nkQvFUk8rGayjSwVj6TmhkS2Pl4YKDIBJyRieA7WeRvBOXvNPkDmnABMU4wj7qI9lNhm78xvJEJ2TQbW0m4CWBGDoKmyD8I37IRnjCU%2FYbA3ibl3PNs%2FKVUvRRsm5tXjET4V&X-Amz-Signature=f2ac46357d1a984da528bbb1e47c292a1d9b25953c6c140f2e9cbff6a20fa822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

