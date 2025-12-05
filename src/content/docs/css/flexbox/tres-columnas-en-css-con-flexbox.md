---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZXGV6B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7M6Nuwdsya6ZzCM6itvF2Pg51bPN9u4SdGHsvcDiUJAiA%2F0g5UeDlb24byg9XLAuUoN6v88EsbCSP169723r%2BG5Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq45YK8VIvl8pCXaUKtwDQ6Gt8WzRWRM0se4R%2Bc5hhE9tapIlVwzRbqNqmxBySXZirYYh87%2F4GfoP8ALpFymjbB5VY1mO9xfKjcOv1PIF1g1iFSTGIf4fcBsicjKCiytal5TFjqo3UDsRPve1LwDVhcTUzImVhDJh0V99fTbre6LD1tY%2FHo9BIStOUqLvCWVrWaIDZWIU8lWxixThmZqprpVhncm%2Bga9ubUmIK45UCKzYeB5UTwIHhp%2B4EAc4SZq6XWPQnBDNHpScbtCRhlCocK7dWzmnGMf1L%2F4%2BdkH4SWoXKLw0Jrj44%2BF2S2nlKCDoiNl678ekPrOi4Yk7gve84lGMBb7pOhFTuYXT80yGzZXcZm%2BYr9DUp3e721GXDeV5w769Mtud2shKEBrGUru1HHLvT8N1ZLH9qPtaFrFShHIXSzmUsQuAR5Otdp%2FK7tNPWcUR5XciaCO6Rhh2qfxTnQqWjkJQrC9tCBeo%2BBhfJwBNxAkGI%2B7Rv34YwJeEZSTHeiltDIurY%2FhPjHjG1rIQEpV6t0N5AU9aCR3ZbMhsYtYxcj2siwIDOwNODw38rpN3c4xWaYBcG2DsqbC3Zs0YKfj8gsY8ZgrUbvPDAjN3t1PZUFt%2BzDBHKgHZmzlpcsP8sZDlciUM9KPTgxkw2PfLyQY6pgGjMaf4yoOw6EwMMm%2FBoCkvOOkJWvVRqupHz8SjnbevauPNpE%2Fda%2FTwmTRfxTAx2epNBb%2FoG%2Fa0SeLROWxbsCcOfSieCHCw71%2F%2Bjalif64v0zWm5UGWFVBSE%2Fws2xAhqaGqAejL7VUScjTmOh9Y0DTwps40Zj7TzOkNiUnb6XjEhli6p%2FH2DblnaYWWDFA6GM8Jqmx6lkAvSuW7nPXR2EUH%2FFOXjWuh&X-Amz-Signature=b2b8a234fe6233781c64719da5e279cbe9b97b9292ed66bce623bc2f521d72df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZXGV6B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7M6Nuwdsya6ZzCM6itvF2Pg51bPN9u4SdGHsvcDiUJAiA%2F0g5UeDlb24byg9XLAuUoN6v88EsbCSP169723r%2BG5Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMq45YK8VIvl8pCXaUKtwDQ6Gt8WzRWRM0se4R%2Bc5hhE9tapIlVwzRbqNqmxBySXZirYYh87%2F4GfoP8ALpFymjbB5VY1mO9xfKjcOv1PIF1g1iFSTGIf4fcBsicjKCiytal5TFjqo3UDsRPve1LwDVhcTUzImVhDJh0V99fTbre6LD1tY%2FHo9BIStOUqLvCWVrWaIDZWIU8lWxixThmZqprpVhncm%2Bga9ubUmIK45UCKzYeB5UTwIHhp%2B4EAc4SZq6XWPQnBDNHpScbtCRhlCocK7dWzmnGMf1L%2F4%2BdkH4SWoXKLw0Jrj44%2BF2S2nlKCDoiNl678ekPrOi4Yk7gve84lGMBb7pOhFTuYXT80yGzZXcZm%2BYr9DUp3e721GXDeV5w769Mtud2shKEBrGUru1HHLvT8N1ZLH9qPtaFrFShHIXSzmUsQuAR5Otdp%2FK7tNPWcUR5XciaCO6Rhh2qfxTnQqWjkJQrC9tCBeo%2BBhfJwBNxAkGI%2B7Rv34YwJeEZSTHeiltDIurY%2FhPjHjG1rIQEpV6t0N5AU9aCR3ZbMhsYtYxcj2siwIDOwNODw38rpN3c4xWaYBcG2DsqbC3Zs0YKfj8gsY8ZgrUbvPDAjN3t1PZUFt%2BzDBHKgHZmzlpcsP8sZDlciUM9KPTgxkw2PfLyQY6pgGjMaf4yoOw6EwMMm%2FBoCkvOOkJWvVRqupHz8SjnbevauPNpE%2Fda%2FTwmTRfxTAx2epNBb%2FoG%2Fa0SeLROWxbsCcOfSieCHCw71%2F%2Bjalif64v0zWm5UGWFVBSE%2Fws2xAhqaGqAejL7VUScjTmOh9Y0DTwps40Zj7TzOkNiUnb6XjEhli6p%2FH2DblnaYWWDFA6GM8Jqmx6lkAvSuW7nPXR2EUH%2FFOXjWuh&X-Amz-Signature=7e1bb6e58c3f8429844f6638bf82ad750d22265ace88098febaec1953e2cbe95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

