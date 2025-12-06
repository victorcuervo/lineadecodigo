---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4HHUCA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3F%2B4H4GBgos3sQd%2F1G%2B4%2BtFkuDvHpdUYfsmIr%2B%2FZX0AiAfZCjcoriejRpochQgPmPG1yHx8UiVKmcuapMakCSsmir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtq%2FKcnLmuixmgCHfKtwDXTavTJiOFb66jVmlqBWwmTCCXjhzixGP%2BTMtTOxLk4Qr93xwIi206ZYpS%2B8GSaZUqq6jTxJFj31BOrtdqVfgKOVaCV1jRACDhWd%2BI2i59DAqY2By5RswJ5MIGmOj6FO%2Bm1DI9MNvCr3WznRPnQpayPymN%2FOf%2FNHVezTznH66Jl1DaJxPlcMLDwoQRwL7XSnv8iqu%2Fah5WEA3zGbd%2BCDoez0gubFWnEXhBmC%2Fapj%2BN6vHFPvQTeAQQSCRNgB7K31xoaKWJlWwojhUMikIrBxsDXi3cwDLMIVDejCTLl57TwKIZZeTtcGuQJvdWi9Rh4I6hZPu4nB6gAtxmCAxwSx0DHLe0H8XPvHbZXjtwwMR2PWZmFVkvSjkzfHMDfln6%2FA%2Bv%2BR704dp2pZ7jU15HC2q%2FI0yq7CmypY9dmeEja0XbBHej6vRqT1yEtZCdtcpybiexAMYmYhDkGj4SHzsFcEZc2%2F68hg9k%2FMdEpIsQ%2BBypvHJ1MvszY5UXL6oQQ1yIN9B7pKceXHc%2BGGgo4qaXpyVjOQ8NZ91rhC8quorpXXzoaT7Y1I%2FX2DM2ngWKXQqr%2FqVqqK8c1dDIgenhi9agVZcgDC8JQEObA1Yar%2B%2B8Jbfz2l8H1d4NrUGX9NVyBcwx6bQyQY6pgHIPpehn6wzkFgTjh7asYIogrvKPlTWmlL02NguDWN%2B6L2CP2JP2Fe4b8dK%2Fg1TdWvZ1I7q7S9RNVZ0qUZFDxkm%2BQa3jt5HO2vSOcdoBgZjcAsr73lrqs6RKi5dyu08xpHUJkc2%2BZ1FhppD%2Fud81YnKeuxEeQufCf6nwUhaN%2FUAh3x9HI16XMwsHiAK0A219NuhEA%2FcRSu6zc5NegpFhpl%2BRc69jOH5&X-Amz-Signature=36c0de6d5aac69ff5ec3265ac8822deb728989a83d35e08b232ab51daa5f4b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV4HHUCA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF3F%2B4H4GBgos3sQd%2F1G%2B4%2BtFkuDvHpdUYfsmIr%2B%2FZX0AiAfZCjcoriejRpochQgPmPG1yHx8UiVKmcuapMakCSsmir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtq%2FKcnLmuixmgCHfKtwDXTavTJiOFb66jVmlqBWwmTCCXjhzixGP%2BTMtTOxLk4Qr93xwIi206ZYpS%2B8GSaZUqq6jTxJFj31BOrtdqVfgKOVaCV1jRACDhWd%2BI2i59DAqY2By5RswJ5MIGmOj6FO%2Bm1DI9MNvCr3WznRPnQpayPymN%2FOf%2FNHVezTznH66Jl1DaJxPlcMLDwoQRwL7XSnv8iqu%2Fah5WEA3zGbd%2BCDoez0gubFWnEXhBmC%2Fapj%2BN6vHFPvQTeAQQSCRNgB7K31xoaKWJlWwojhUMikIrBxsDXi3cwDLMIVDejCTLl57TwKIZZeTtcGuQJvdWi9Rh4I6hZPu4nB6gAtxmCAxwSx0DHLe0H8XPvHbZXjtwwMR2PWZmFVkvSjkzfHMDfln6%2FA%2Bv%2BR704dp2pZ7jU15HC2q%2FI0yq7CmypY9dmeEja0XbBHej6vRqT1yEtZCdtcpybiexAMYmYhDkGj4SHzsFcEZc2%2F68hg9k%2FMdEpIsQ%2BBypvHJ1MvszY5UXL6oQQ1yIN9B7pKceXHc%2BGGgo4qaXpyVjOQ8NZ91rhC8quorpXXzoaT7Y1I%2FX2DM2ngWKXQqr%2FqVqqK8c1dDIgenhi9agVZcgDC8JQEObA1Yar%2B%2B8Jbfz2l8H1d4NrUGX9NVyBcwx6bQyQY6pgHIPpehn6wzkFgTjh7asYIogrvKPlTWmlL02NguDWN%2B6L2CP2JP2Fe4b8dK%2Fg1TdWvZ1I7q7S9RNVZ0qUZFDxkm%2BQa3jt5HO2vSOcdoBgZjcAsr73lrqs6RKi5dyu08xpHUJkc2%2BZ1FhppD%2Fud81YnKeuxEeQufCf6nwUhaN%2FUAh3x9HI16XMwsHiAK0A219NuhEA%2FcRSu6zc5NegpFhpl%2BRc69jOH5&X-Amz-Signature=89d973288d4b64526bb26842c15231ce8a336f5cc13585b41d1c3a14de6799d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

