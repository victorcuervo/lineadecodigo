---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPHEFNR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDweP1iMyEsxCxXVSHchOwLS3zfRVyBJNpeuK0cDx5OewIhANdZwIRLcY%2FxSGTU%2F4sbL4jmMBV2DIDZNuRdbrn9x4uaKv8DCH8QABoMNjM3NDIzMTgzODA1IgxesRsGiAuYIo7gGJQq3AMgxAV%2BzjMWaZJ5DTRFh5xhr70k%2F%2FZKYsbhoWSkT2LF4OQoWQRHs499rnNAF8vgX%2BwJa%2BvqAaXapx3fz1IGh74FCaegt5qkvUDAC%2Bc%2FphPGpufOCE4%2FYMorsD97Mu2dc%2BSSMMd4GsURacJ7O6HadTDiLqbjGCOJ%2BGiD5S1IcF7dM78YxckROXQJMFyOcSHBuMGNnCgBTgO%2BwcAwWlJKwMWU5wV1A3ZsVcoSWk7Oyofqvi7XuQW%2Bf84GFMrYz%2B4wRJV1aBr%2FX5um005wp9JTbB5OLyaUkA%2B%2Fhp189SSxxIqGJmQd0CTvUa3ZgaKo5I9lZOZUQTPm2pK1VikvTFdniovrmk4a4bkfR%2FCOrveOFWL9o9MKpNEi01UW%2BuJoR4Idpeup%2FI2Px%2BlLA15ehD6CrAGZYIaJqq0h8S4tZZFK8lIWyFHShb4iVfr2OsgtVo%2FQUMW2q44JYaSDdf8D6s4NZC9LByezQgAJNZGmCZuy7jlDLlEzQBaIYCAiX2NoOW6wEySdjy8eDGPY%2Bxl51oCYPc7YLpPiw0G1LQCOyOm3MEdc%2F8oSPUKeJWa1ojK63fqcZ8aXp1%2Bw9U9OIiPoP50mErU2vU%2FRUTOHgMVixnGu4X3OxPWBa3xV63McI%2BNGVDCk1NLJBjqkAUq%2BGfwbBbcNIuu6KfaZKYLDQBDMzUMm2iNaZPSW%2BaReK7kugA89V%2B%2BstnSrHkSFQDF9ZVzPfkTSJ%2FL5kmZQJkTfhwbZVhIuFU7RtwfCiK2ktFj%2FkcNCqGVrdbtuofn1OOBhUPbis%2FKqiaGXt8Fp2CjQ4Ob5NcnYJcbrYvFpq5zy7laD1CXhlTP2AFRMqbUWR4wlLoAg2VA0%2BzCkbeqe7BRM%2Bi1I&X-Amz-Signature=a2d2f660087be2b90620e46cb16aabef7143eb318bf0b1d8eac8fcd901157d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPHEFNR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T223141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDweP1iMyEsxCxXVSHchOwLS3zfRVyBJNpeuK0cDx5OewIhANdZwIRLcY%2FxSGTU%2F4sbL4jmMBV2DIDZNuRdbrn9x4uaKv8DCH8QABoMNjM3NDIzMTgzODA1IgxesRsGiAuYIo7gGJQq3AMgxAV%2BzjMWaZJ5DTRFh5xhr70k%2F%2FZKYsbhoWSkT2LF4OQoWQRHs499rnNAF8vgX%2BwJa%2BvqAaXapx3fz1IGh74FCaegt5qkvUDAC%2Bc%2FphPGpufOCE4%2FYMorsD97Mu2dc%2BSSMMd4GsURacJ7O6HadTDiLqbjGCOJ%2BGiD5S1IcF7dM78YxckROXQJMFyOcSHBuMGNnCgBTgO%2BwcAwWlJKwMWU5wV1A3ZsVcoSWk7Oyofqvi7XuQW%2Bf84GFMrYz%2B4wRJV1aBr%2FX5um005wp9JTbB5OLyaUkA%2B%2Fhp189SSxxIqGJmQd0CTvUa3ZgaKo5I9lZOZUQTPm2pK1VikvTFdniovrmk4a4bkfR%2FCOrveOFWL9o9MKpNEi01UW%2BuJoR4Idpeup%2FI2Px%2BlLA15ehD6CrAGZYIaJqq0h8S4tZZFK8lIWyFHShb4iVfr2OsgtVo%2FQUMW2q44JYaSDdf8D6s4NZC9LByezQgAJNZGmCZuy7jlDLlEzQBaIYCAiX2NoOW6wEySdjy8eDGPY%2Bxl51oCYPc7YLpPiw0G1LQCOyOm3MEdc%2F8oSPUKeJWa1ojK63fqcZ8aXp1%2Bw9U9OIiPoP50mErU2vU%2FRUTOHgMVixnGu4X3OxPWBa3xV63McI%2BNGVDCk1NLJBjqkAUq%2BGfwbBbcNIuu6KfaZKYLDQBDMzUMm2iNaZPSW%2BaReK7kugA89V%2B%2BstnSrHkSFQDF9ZVzPfkTSJ%2FL5kmZQJkTfhwbZVhIuFU7RtwfCiK2ktFj%2FkcNCqGVrdbtuofn1OOBhUPbis%2FKqiaGXt8Fp2CjQ4Ob5NcnYJcbrYvFpq5zy7laD1CXhlTP2AFRMqbUWR4wlLoAg2VA0%2BzCkbeqe7BRM%2Bi1I&X-Amz-Signature=8fc2d28e32a28d083433b686f6894cbebb22ceb30a3202c2bb338d2d619fec89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

