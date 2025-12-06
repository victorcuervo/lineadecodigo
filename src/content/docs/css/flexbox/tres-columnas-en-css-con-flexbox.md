---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGI6MVZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qg0%2FQCLiHJA7291uq60xbUtoGcyK1VIxyWGfb8f6TAiBjKNQJxcpDDVSA9tEd1%2FDEX9xtiWBC%2F1EqW%2BmLurlr1Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgybLiUb2ggMGgOIlKtwD%2FNco3qvFm5tK0TYBFgDG6ny%2FHjadGallK3I2coNcnMaj358QcIQzLumEtJ7wnJHKVrOGiJrJ2kVEstVeZ8D4dt9mnLha5W%2FgCGv56fTcVhjfMrhq387RapLzzVcW5ZYgIwmLLRTMxREPKypsBvNzXvEb%2BRXgd3Fr4sWOk7qEflk0%2F4emqLbXIoTOGwY3bS%2BF2dzhMaWECPTqYM%2BaAP88Pmef9Mc5PZhrbPROOROZRDwkS%2FavdmNses%2BktAiOXTKYO0%2FGQaTej%2FZENSr6zO3ZjTzwUurYC8kN9pQm1E3JACBbAFS%2FdJI2GbbTSth2Ks26PoYuD0rD3f4wtPqhyOjfTVBSN9jH1USP8LsHYXmn4sSxlk2XdjI5OiWBdH7AAb%2FslF%2BKZRhs5d2e7zudwdErqPviO0ItRwnQXajBffMhrWj5y6rym9M5T9AUd%2B8eQ64Di6nw%2FqBwzXKobT6Pe5EdXj50X4cs64jeVHjUOETtqlCRxBsaCIiF%2BtomTutHI5NkKTcD6gCuL7B9INKly6FE0AbMMnw52ulnOdKY%2FPLT26q%2FkVakAD4hkDt9h2D0NM5%2FuLxaL8R73HKAfkgByVvLc%2Bbd71%2BKpTS0nkLSoVxBo%2BhzcAAtbOXNK%2B%2B%2FpC8w1vzOyQY6pgEfQLCcN61fhlHu8rd9xjWwbfK4NnnYZF%2BgBuHN9AGBdFhpCh9duQU%2FvJokniNlhuh%2Fda9Bz2sywcwEtV%2BxcVYeZatJ0%2BpybrRvDmKfkrOTHO7S6gX2AHdiiPrNk4BOgD3APYd%2BY8W%2FTzD5VyGPXcvTxGQpfZ9W9jEAG871BP9U9aZtp6B4951%2BFFKPzCJnx7zhrUL5OQ%2BCiCHNSpX7Tg55ViGhnsPW&X-Amz-Signature=237cf170e05dc7d1b2bde50a2e43b85dfc6ab5d2bb3de86862871b73cfc1cf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGI6MVZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4qg0%2FQCLiHJA7291uq60xbUtoGcyK1VIxyWGfb8f6TAiBjKNQJxcpDDVSA9tEd1%2FDEX9xtiWBC%2F1EqW%2BmLurlr1Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMgybLiUb2ggMGgOIlKtwD%2FNco3qvFm5tK0TYBFgDG6ny%2FHjadGallK3I2coNcnMaj358QcIQzLumEtJ7wnJHKVrOGiJrJ2kVEstVeZ8D4dt9mnLha5W%2FgCGv56fTcVhjfMrhq387RapLzzVcW5ZYgIwmLLRTMxREPKypsBvNzXvEb%2BRXgd3Fr4sWOk7qEflk0%2F4emqLbXIoTOGwY3bS%2BF2dzhMaWECPTqYM%2BaAP88Pmef9Mc5PZhrbPROOROZRDwkS%2FavdmNses%2BktAiOXTKYO0%2FGQaTej%2FZENSr6zO3ZjTzwUurYC8kN9pQm1E3JACBbAFS%2FdJI2GbbTSth2Ks26PoYuD0rD3f4wtPqhyOjfTVBSN9jH1USP8LsHYXmn4sSxlk2XdjI5OiWBdH7AAb%2FslF%2BKZRhs5d2e7zudwdErqPviO0ItRwnQXajBffMhrWj5y6rym9M5T9AUd%2B8eQ64Di6nw%2FqBwzXKobT6Pe5EdXj50X4cs64jeVHjUOETtqlCRxBsaCIiF%2BtomTutHI5NkKTcD6gCuL7B9INKly6FE0AbMMnw52ulnOdKY%2FPLT26q%2FkVakAD4hkDt9h2D0NM5%2FuLxaL8R73HKAfkgByVvLc%2Bbd71%2BKpTS0nkLSoVxBo%2BhzcAAtbOXNK%2B%2B%2FpC8w1vzOyQY6pgEfQLCcN61fhlHu8rd9xjWwbfK4NnnYZF%2BgBuHN9AGBdFhpCh9duQU%2FvJokniNlhuh%2Fda9Bz2sywcwEtV%2BxcVYeZatJ0%2BpybrRvDmKfkrOTHO7S6gX2AHdiiPrNk4BOgD3APYd%2BY8W%2FTzD5VyGPXcvTxGQpfZ9W9jEAG871BP9U9aZtp6B4951%2BFFKPzCJnx7zhrUL5OQ%2BCiCHNSpX7Tg55ViGhnsPW&X-Amz-Signature=627640669cb9be674e5298333085fabd90bfabf1a54a88e20f2b3bef8cdd8e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

