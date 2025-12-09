---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354FDOF4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnNE02ycHV6Alz3WMhQ1UyNRRFQg49li1sC4HfDIqe%2FAiB2vbImQx4AByO1V2DDFjghW%2Bx8kN%2B36GDmxXLeULz5dCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqUuIFT6lVGcDdQJKtwDc3DN5hJXRlrrpbOiFWevfnDYzR8Rbxj52Oo8elQ9IM5OhF0O0yt4bpSeKsjfDbhnQhtS9mtHatrZ4ngBt9Rou0rPh%2F9HbEa7pYIIq%2BiyktvJQLjO5qAkrSxAQANf0ZPtUuDrATgmZ%2B6ZeYpGeK23A9c6XQv%2BPC13lHsgVy%2FWcDZDV2Bfy%2BaVx3oYJb6%2Bdf6e97Fg7CDtEKxNtHRGyb%2B54CE4FwmBtYeCYVfBd3CzmuAhZli5pkh6hRFFIXPSHE005yEw5KsFq7r%2BPRQrueIe%2FHqNaRnnAgjbISsK0coYzKr9YtGhy5ZTLNRarNaVvjBgm4JBLh%2BXSajoVm7HHFrXXV1A9lye6sHpwsdY9lRsNWIAlcCPX2DrrAgJDbeysnFKm45FDqCm2PqASzyw9M3iTUpgxnF2euESL3WAd%2BqClpGY3LpwsR2GvBMF5Lmr536d692E12hcGipwGG3hzTgskPszZL%2BeH7hV9FujOIum2pCrSi87hGu%2BC49JxDGCR%2BMJJeus8kublzVeNkXP9WvLRoWaRJOn1Kc2g0173n0YuSlS4pyYKSsEK%2FphjrVTr%2B0wNcFFAOmlHtxBgbPeTErB7zWBIWe2pkD8ZLnlfu6PWe7AoFHp9S3cuNZaTJQw3eTeyQY6pgE%2Bonxx%2F3519Rt7gzVD%2Ba9EJkoeY9ltcz%2FzOod9qHQi8Tk%2FYDXb0S2zg1UN1YhYW3BzAdrvauElWpwVyUKWgmfnqI3iI6Rk%2FPiy7o79X8%2Bbv9olCXSpzN%2BjRF%2B%2FAuGI3Gu7kdZLjbBRoT%2FRjW9fETX1l7%2FUmqKhSOqR2bQo5rAE03NnvUwEJTZvy7XeqbSM6%2FU%2Fh8edAP7O9mlcb9dMeM%2BzBgbUX%2BAF&X-Amz-Signature=714f5bf4d9bc1ff41ba8500498e2b5d4d37028e97ab7b419532aff317fab9f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354FDOF4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnNE02ycHV6Alz3WMhQ1UyNRRFQg49li1sC4HfDIqe%2FAiB2vbImQx4AByO1V2DDFjghW%2Bx8kN%2B36GDmxXLeULz5dCqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqUuIFT6lVGcDdQJKtwDc3DN5hJXRlrrpbOiFWevfnDYzR8Rbxj52Oo8elQ9IM5OhF0O0yt4bpSeKsjfDbhnQhtS9mtHatrZ4ngBt9Rou0rPh%2F9HbEa7pYIIq%2BiyktvJQLjO5qAkrSxAQANf0ZPtUuDrATgmZ%2B6ZeYpGeK23A9c6XQv%2BPC13lHsgVy%2FWcDZDV2Bfy%2BaVx3oYJb6%2Bdf6e97Fg7CDtEKxNtHRGyb%2B54CE4FwmBtYeCYVfBd3CzmuAhZli5pkh6hRFFIXPSHE005yEw5KsFq7r%2BPRQrueIe%2FHqNaRnnAgjbISsK0coYzKr9YtGhy5ZTLNRarNaVvjBgm4JBLh%2BXSajoVm7HHFrXXV1A9lye6sHpwsdY9lRsNWIAlcCPX2DrrAgJDbeysnFKm45FDqCm2PqASzyw9M3iTUpgxnF2euESL3WAd%2BqClpGY3LpwsR2GvBMF5Lmr536d692E12hcGipwGG3hzTgskPszZL%2BeH7hV9FujOIum2pCrSi87hGu%2BC49JxDGCR%2BMJJeus8kublzVeNkXP9WvLRoWaRJOn1Kc2g0173n0YuSlS4pyYKSsEK%2FphjrVTr%2B0wNcFFAOmlHtxBgbPeTErB7zWBIWe2pkD8ZLnlfu6PWe7AoFHp9S3cuNZaTJQw3eTeyQY6pgE%2Bonxx%2F3519Rt7gzVD%2Ba9EJkoeY9ltcz%2FzOod9qHQi8Tk%2FYDXb0S2zg1UN1YhYW3BzAdrvauElWpwVyUKWgmfnqI3iI6Rk%2FPiy7o79X8%2Bbv9olCXSpzN%2BjRF%2B%2FAuGI3Gu7kdZLjbBRoT%2FRjW9fETX1l7%2FUmqKhSOqR2bQo5rAE03NnvUwEJTZvy7XeqbSM6%2FU%2Fh8edAP7O9mlcb9dMeM%2BzBgbUX%2BAF&X-Amz-Signature=e4a62221c504fdbf650d78679c6576990241e9e7dd224c5d8a4100b50f94b546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

