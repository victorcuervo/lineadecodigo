---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EFZVQG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXSRJ1Z%2B6hc61aqMoH2T3C1tjm6f4WYVSUn0Ia2JBPGAiEApd%2ByWz8biCYNmmX2WODxD9lQMYHIajcc%2FXWdw6IIqFwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDD06QWV%2B2pCGWP971CrcAyfgSJOHL8rp5WGEP2Db4vOSVjXptRKV40wTftTXcJ9ppI7%2BckhgU8UymiZ77i8fzk35Hxj4UPEDk5DBQq0JwVKixW1EgNAd1l1ebvU6tX3E0UitqNLBc5w%2FJv4tgK8E669fbXrl0V%2Fr0%2B%2FjJK26xd59hUtdDVR4Mlk3NgNqjC6p9nVgR54nZHtVOK5Nxz2%2BtMLD9QE8LPwexUZHorXYkF6xeGoZfBFCM7ar8ZDuYqPrSQ1Aoa4TQKRylJRx0F5nn2KYsHgHxrQsSbZgjzKm1CPZmFpIodCuXH%2BYGf5S9dEpP%2Fp1IMRVFc5s3CfpulTLZavJIn4VfZGp3B6N1fkb5ex1zS8e315eW1WZXHyQpczj9rSYMhGr8HHucsLAkbmr18r9EV40jsc9fYqwGaq7HiIxt2%2Fj1yzVQMpVoXWEjxNzbYanA5WW5JkUBkcb3YjhLM5ujNnuJAcibjq%2BOBzBh8J1ExxLsRasBfaHCX%2B%2FCepWq0BhTjAX%2B66%2BmhhvDLGN8BSXLZ3%2FYvNVpW4JEzntAXBPcPbriq%2FbLzen5dErwjpGRcW4Mg7eBOXc5Sds8zbvLdYzw%2B9NlqGiuQ%2B1X5hrCVJ%2BT61Yjog3YpOZObNFcc%2BVNQQOJRc22pH540acMNXGzckGOqUBLAs6zPvMQBsu060bEEiFEyR5MsX7auIs0V45HqCJbkMmE4BHxM5%2FTqr9ZzSRB7MsThggJm1kE84rftJa9j4G95aCvCT4E%2FcbLcmRLraXkj7wzZvziUVgHOmUAICg5bFnICZOBy04gx3jpoyzvt1gNihoGAYkZHeIDSmvKjsVy8iFB7XinsuU2WIchagd4U7byfswmR1UTMMJ1tzuJ%2Bb2TU%2FQ9ew0&X-Amz-Signature=273868fdda19c02f3e6892744a93b9bfee3a34c5bafc67984eed740e7e7d3173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EFZVQG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXSRJ1Z%2B6hc61aqMoH2T3C1tjm6f4WYVSUn0Ia2JBPGAiEApd%2ByWz8biCYNmmX2WODxD9lQMYHIajcc%2FXWdw6IIqFwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDD06QWV%2B2pCGWP971CrcAyfgSJOHL8rp5WGEP2Db4vOSVjXptRKV40wTftTXcJ9ppI7%2BckhgU8UymiZ77i8fzk35Hxj4UPEDk5DBQq0JwVKixW1EgNAd1l1ebvU6tX3E0UitqNLBc5w%2FJv4tgK8E669fbXrl0V%2Fr0%2B%2FjJK26xd59hUtdDVR4Mlk3NgNqjC6p9nVgR54nZHtVOK5Nxz2%2BtMLD9QE8LPwexUZHorXYkF6xeGoZfBFCM7ar8ZDuYqPrSQ1Aoa4TQKRylJRx0F5nn2KYsHgHxrQsSbZgjzKm1CPZmFpIodCuXH%2BYGf5S9dEpP%2Fp1IMRVFc5s3CfpulTLZavJIn4VfZGp3B6N1fkb5ex1zS8e315eW1WZXHyQpczj9rSYMhGr8HHucsLAkbmr18r9EV40jsc9fYqwGaq7HiIxt2%2Fj1yzVQMpVoXWEjxNzbYanA5WW5JkUBkcb3YjhLM5ujNnuJAcibjq%2BOBzBh8J1ExxLsRasBfaHCX%2B%2FCepWq0BhTjAX%2B66%2BmhhvDLGN8BSXLZ3%2FYvNVpW4JEzntAXBPcPbriq%2FbLzen5dErwjpGRcW4Mg7eBOXc5Sds8zbvLdYzw%2B9NlqGiuQ%2B1X5hrCVJ%2BT61Yjog3YpOZObNFcc%2BVNQQOJRc22pH540acMNXGzckGOqUBLAs6zPvMQBsu060bEEiFEyR5MsX7auIs0V45HqCJbkMmE4BHxM5%2FTqr9ZzSRB7MsThggJm1kE84rftJa9j4G95aCvCT4E%2FcbLcmRLraXkj7wzZvziUVgHOmUAICg5bFnICZOBy04gx3jpoyzvt1gNihoGAYkZHeIDSmvKjsVy8iFB7XinsuU2WIchagd4U7byfswmR1UTMMJ1tzuJ%2Bb2TU%2FQ9ew0&X-Amz-Signature=ffbc3842370b0cd414c2b7425fce7572a966334a31d3b16e31b246029b9e4928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

