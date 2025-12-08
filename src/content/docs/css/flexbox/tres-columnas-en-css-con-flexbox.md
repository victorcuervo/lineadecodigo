---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBMCHZA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz1nfWrsd96LyvmuDsYRdBbv2SrtGyy0PebblhK5AQQIgE%2FUYN%2Fzq31Dh1q1mGAq1rKknI4B21veJIxJt8sIjtJwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeV32y8gSkEFb%2BKOCrcA6XSGlslbmvjMva4DT%2BQGCypmlDIyREp%2BrJq2oetvZqojIEhsIXphm8JNXpmp%2FwrMqZ0Rx3eCphU%2B4eG%2BYO%2BKqFapVpwt1qPuLpalmCswoOUwmYLKUECMUEZAP%2FDmIKySjX48x5ClmL9HY2dnNWJZJVZHUkJ%2BBLcSOxNqWrUGQ6%2FQ7kYTJKH60RTwFVJOxZogoEdirjeL8uwLPvcaj2LQAK9sKrudIBYjRdZWQ8N%2BFWDbETcPtRvA8WBfy9jHymaFpY7A1inQCsxSP8bi%2Fv3nVQJKC7kfL01qDbEWl5DuxyEODl6Ct7kI40%2F7tKp1FV3VCsWdxuJE7t%2FKDp87ykhTjbnKFyizEkh9wONOXBGITWREayv6rz4NbFz%2FbZ76vCiKSfBgACmitSgycKZz15JDDI7RVO2o31TvhieIU46iphx67%2BC%2B%2F84VYv61iVsFEQRh5mZ99BDDxsrl5SDri%2FiRLKKoUnnGRPNKj9Uyw9jKbctXPb4DjvoGNBaFE1orxpVp4hkou2m0j4zNk7WNnFxaaQl018H6bPSISlBjjR75hs9JHahB217PrdgY98jsejdIk9Jp2W3mNhtBg57sqSORnu17iK4AY4S%2FbDdUtWkhgAKhUznwrL2o6C%2Fnzm9MMu02ckGOqUBGW6nZqZHKDtk%2FzKDj3M%2FRxzTD39jYgH%2FlWyTs%2F0klQa9B2sFqQo9aLrcqCjivuIozEognsdFLtmAmios6i7zn%2FWoOZMX9jnfp06dwhL4rXs4oxmI2fkQ6sYLHN%2BV6cr40xRDQqp7rpymDIuPh1vx7TcWKyQ3PC8NkO4h%2FmAq2azq%2F2Mupf5g6dGDDf3XUEyYjC3X94v29VqGczLLGOPEy%2BUMhe8l&X-Amz-Signature=40cfa8758e77589b695261e7cf5e9738a84617a126cacc74b4823f7bc14db6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMBMCHZA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQz1nfWrsd96LyvmuDsYRdBbv2SrtGyy0PebblhK5AQQIgE%2FUYN%2Fzq31Dh1q1mGAq1rKknI4B21veJIxJt8sIjtJwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeV32y8gSkEFb%2BKOCrcA6XSGlslbmvjMva4DT%2BQGCypmlDIyREp%2BrJq2oetvZqojIEhsIXphm8JNXpmp%2FwrMqZ0Rx3eCphU%2B4eG%2BYO%2BKqFapVpwt1qPuLpalmCswoOUwmYLKUECMUEZAP%2FDmIKySjX48x5ClmL9HY2dnNWJZJVZHUkJ%2BBLcSOxNqWrUGQ6%2FQ7kYTJKH60RTwFVJOxZogoEdirjeL8uwLPvcaj2LQAK9sKrudIBYjRdZWQ8N%2BFWDbETcPtRvA8WBfy9jHymaFpY7A1inQCsxSP8bi%2Fv3nVQJKC7kfL01qDbEWl5DuxyEODl6Ct7kI40%2F7tKp1FV3VCsWdxuJE7t%2FKDp87ykhTjbnKFyizEkh9wONOXBGITWREayv6rz4NbFz%2FbZ76vCiKSfBgACmitSgycKZz15JDDI7RVO2o31TvhieIU46iphx67%2BC%2B%2F84VYv61iVsFEQRh5mZ99BDDxsrl5SDri%2FiRLKKoUnnGRPNKj9Uyw9jKbctXPb4DjvoGNBaFE1orxpVp4hkou2m0j4zNk7WNnFxaaQl018H6bPSISlBjjR75hs9JHahB217PrdgY98jsejdIk9Jp2W3mNhtBg57sqSORnu17iK4AY4S%2FbDdUtWkhgAKhUznwrL2o6C%2Fnzm9MMu02ckGOqUBGW6nZqZHKDtk%2FzKDj3M%2FRxzTD39jYgH%2FlWyTs%2F0klQa9B2sFqQo9aLrcqCjivuIozEognsdFLtmAmios6i7zn%2FWoOZMX9jnfp06dwhL4rXs4oxmI2fkQ6sYLHN%2BV6cr40xRDQqp7rpymDIuPh1vx7TcWKyQ3PC8NkO4h%2FmAq2azq%2F2Mupf5g6dGDDf3XUEyYjC3X94v29VqGczLLGOPEy%2BUMhe8l&X-Amz-Signature=100d2fa52a2f7c86a1272d1ebaed1ba39d00eac96928d16e5b0795576724e5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

