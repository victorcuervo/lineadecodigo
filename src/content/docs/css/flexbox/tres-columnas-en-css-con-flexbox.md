---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4AQ2MWT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo3g3tzLu5GGHlSp%2FgIdtvAdW%2Bruo81%2FxIqNjngjE%2FQAIhAJ2uXjX5Zzvy6oOgMJzA5fs8SzFU7jvrLLCcugNVIupVKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAC3BcpWRiEBRCt6gq3ANBAfOhsF%2B4FqrxhbBFR5aNB9aWhPkfi9C8IivzO7HvphW7kSa0P0UuDFEpk3W6qWmLjs4li9HFR7p6uovgzP2QyhSnAN16DV0Sj5q0NTiqoM08raPkF1xNc%2BOOGd%2FcwGrxL7AnI8fNe%2BO9uYK0Dc2vTPjXuDniZl8xvh9oLqmb%2Fbs%2FiAv2hfK8Ve9YaB8an8V3IHCRyGVX2UN9BGYxTd%2BI4GbER25fTk2QzHKZSMFqw1Bw%2Ffi7G4lURxn6l%2FaBv%2FHaNgJqtKofRDcThWKxThoEFTrAVvuG5Zoxa4hEu74lIh7bhi9R549nifX2HEef9DOKsPLU3lwr6BAYlVcY2nfaRRzki06atYqECltnZBtmF%2FF%2FjsYMoZ59nIPkQDRJahf4g2R2x8RCTuarLnECglqTtnZkIt%2BQ7eRYfBuaka%2FeVFQkrhUa07iwBbEgS%2BVsD54KT364HeS8y8%2F6%2FHpIWZ6D3ah6o3oobPpVqRgtIbq0bvhSsgIKMs0JvxMvoqXPqwTgNnCbmR4z0u5ovTy7z0DOtqOhYn5vz6o5jKBKpu8gjjfQ5MGqFMuAxCt%2BjgkvMpnOXDSnX1jwSEILOIAJjfE4USEUT17dUd359KgEBdXX1A4H%2BWxEB3qH3mi2uDCYxN%2FJBjqkAU7qUGbr%2FNLC%2B%2F4%2FUqC4eP0D8WAYY6gbijeNm20%2BdJroguUh%2FK7AJUc3kLSsMTeQZJENBtLO72OJSUXPAAVWcXB34YFEqu6XEgoDBbq7YoqjOSvT5dCZ%2Bg%2FKHoYLRKJ2336b7%2BwQKsYZ5HpYO0fbxBU2MGqHPdd2poBsr5ojGV1oMFeK%2BOgYx58kfCZGQPffO7yvb%2FYweTPtnN6WobsHmro9DRE0&X-Amz-Signature=83ac01e78bc8f4e5a45cd859a0ce22ca589c44b3114b58e671bc84bdb9a0c965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4AQ2MWT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T095334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo3g3tzLu5GGHlSp%2FgIdtvAdW%2Bruo81%2FxIqNjngjE%2FQAIhAJ2uXjX5Zzvy6oOgMJzA5fs8SzFU7jvrLLCcugNVIupVKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAC3BcpWRiEBRCt6gq3ANBAfOhsF%2B4FqrxhbBFR5aNB9aWhPkfi9C8IivzO7HvphW7kSa0P0UuDFEpk3W6qWmLjs4li9HFR7p6uovgzP2QyhSnAN16DV0Sj5q0NTiqoM08raPkF1xNc%2BOOGd%2FcwGrxL7AnI8fNe%2BO9uYK0Dc2vTPjXuDniZl8xvh9oLqmb%2Fbs%2FiAv2hfK8Ve9YaB8an8V3IHCRyGVX2UN9BGYxTd%2BI4GbER25fTk2QzHKZSMFqw1Bw%2Ffi7G4lURxn6l%2FaBv%2FHaNgJqtKofRDcThWKxThoEFTrAVvuG5Zoxa4hEu74lIh7bhi9R549nifX2HEef9DOKsPLU3lwr6BAYlVcY2nfaRRzki06atYqECltnZBtmF%2FF%2FjsYMoZ59nIPkQDRJahf4g2R2x8RCTuarLnECglqTtnZkIt%2BQ7eRYfBuaka%2FeVFQkrhUa07iwBbEgS%2BVsD54KT364HeS8y8%2F6%2FHpIWZ6D3ah6o3oobPpVqRgtIbq0bvhSsgIKMs0JvxMvoqXPqwTgNnCbmR4z0u5ovTy7z0DOtqOhYn5vz6o5jKBKpu8gjjfQ5MGqFMuAxCt%2BjgkvMpnOXDSnX1jwSEILOIAJjfE4USEUT17dUd359KgEBdXX1A4H%2BWxEB3qH3mi2uDCYxN%2FJBjqkAU7qUGbr%2FNLC%2B%2F4%2FUqC4eP0D8WAYY6gbijeNm20%2BdJroguUh%2FK7AJUc3kLSsMTeQZJENBtLO72OJSUXPAAVWcXB34YFEqu6XEgoDBbq7YoqjOSvT5dCZ%2Bg%2FKHoYLRKJ2336b7%2BwQKsYZ5HpYO0fbxBU2MGqHPdd2poBsr5ojGV1oMFeK%2BOgYx58kfCZGQPffO7yvb%2FYweTPtnN6WobsHmro9DRE0&X-Amz-Signature=cb0a8261da150a29912c8954dca64269881daae9263ae48d149d24c0330e6502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

