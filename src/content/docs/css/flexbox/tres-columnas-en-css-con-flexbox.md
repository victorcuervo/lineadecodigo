---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RRB7IO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwewdtkLk8W0She2Lmpi4e9EQfo%2BAQXiwhRt4JtAkdAAiAJ0fpObyVUBY3snRKVzhqSr3C2keqh2e0Dat5NZYReeyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMgX182w6FIVWjPqzeKtwDEU3mtouzAyFaxuldQpt%2FuWGDt%2FWsXNuzdbKijzaTqocrgwqIEfK30JW5jwFg%2FQ8jQvEl8cUMkve2VmARSz%2FzJRdmmWanfKW3AaiFyO0JtXNGXuc6DNuDwxPYqyDGM3L8j4viAGX%2BB2pHLGJFQs6kQvDsqxd7MJri%2FEv5Hl56HkUVh2pNFSvnGEe7ZeSuMWeDHpaRVZi3r9JSR763LR6XV9XIjyLKNbUR3kOEAWuGwanupvzwXXir5JqHi%2B5wYXVLPqTNSH75%2BIKlbr9a%2BPKTutX4DLuvvlTtw230LTRP17cnzSPnE%2FtRJZkvTL24Iy1VEtIAT4Qn16cCckNzu%2FKh5Yo43GwLjO0qagDSIMiBXjVIk0rnW9%2BxlsIeORF92eUuItJQmRO4IUJ6ZR%2Fk06lYUiMTZfdnKl9qkU9RsQFnxQu7s5oJ%2F0tfs61vp26ygYinz3W8I3SjkwdNpnVF%2F3mJh39W%2FRgPTkSayTmgWttQhKWcAEfyW1kzszg8uTJDv%2BxRyEqx%2BkQKPlskXldCcgHHDqAV%2BagzJrsMsdY2Upwe52W2poLX%2FWvXmu0f6UP3mPnKmlpTBProh7RILDw110z7mVyf4eNGa5IuFtIot9ExeQ8Mu1j9yPXNT6vmw8wwhK3JyQY6pgGZ9Tl1iHLFDjrBHh9I9WGSibHG6UyDwk8dlZepRCEuA85mXnfTBkGaImJHeQnExUpYW0IaW9%2FzNEbDPO2qWyZfe4z1QhzLgj2YcTJeVRazY9NB4VbvuHiFLO4iXtOS%2FMbIDEsoS2dbmVHcU8kUeGj0fnFsqoAgdLs4W%2Fzy0SeFpxNBkKLwmAFbs9OwCQSWUxrDc0pmbNjzqZjbUbL%2BrYTWcEEIV0cz&X-Amz-Signature=50917749d80e47f428af988d8ef8c9ff3759ac2e32b03eeb186f876941057cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635RRB7IO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwewdtkLk8W0She2Lmpi4e9EQfo%2BAQXiwhRt4JtAkdAAiAJ0fpObyVUBY3snRKVzhqSr3C2keqh2e0Dat5NZYReeyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMgX182w6FIVWjPqzeKtwDEU3mtouzAyFaxuldQpt%2FuWGDt%2FWsXNuzdbKijzaTqocrgwqIEfK30JW5jwFg%2FQ8jQvEl8cUMkve2VmARSz%2FzJRdmmWanfKW3AaiFyO0JtXNGXuc6DNuDwxPYqyDGM3L8j4viAGX%2BB2pHLGJFQs6kQvDsqxd7MJri%2FEv5Hl56HkUVh2pNFSvnGEe7ZeSuMWeDHpaRVZi3r9JSR763LR6XV9XIjyLKNbUR3kOEAWuGwanupvzwXXir5JqHi%2B5wYXVLPqTNSH75%2BIKlbr9a%2BPKTutX4DLuvvlTtw230LTRP17cnzSPnE%2FtRJZkvTL24Iy1VEtIAT4Qn16cCckNzu%2FKh5Yo43GwLjO0qagDSIMiBXjVIk0rnW9%2BxlsIeORF92eUuItJQmRO4IUJ6ZR%2Fk06lYUiMTZfdnKl9qkU9RsQFnxQu7s5oJ%2F0tfs61vp26ygYinz3W8I3SjkwdNpnVF%2F3mJh39W%2FRgPTkSayTmgWttQhKWcAEfyW1kzszg8uTJDv%2BxRyEqx%2BkQKPlskXldCcgHHDqAV%2BagzJrsMsdY2Upwe52W2poLX%2FWvXmu0f6UP3mPnKmlpTBProh7RILDw110z7mVyf4eNGa5IuFtIot9ExeQ8Mu1j9yPXNT6vmw8wwhK3JyQY6pgGZ9Tl1iHLFDjrBHh9I9WGSibHG6UyDwk8dlZepRCEuA85mXnfTBkGaImJHeQnExUpYW0IaW9%2FzNEbDPO2qWyZfe4z1QhzLgj2YcTJeVRazY9NB4VbvuHiFLO4iXtOS%2FMbIDEsoS2dbmVHcU8kUeGj0fnFsqoAgdLs4W%2Fzy0SeFpxNBkKLwmAFbs9OwCQSWUxrDc0pmbNjzqZjbUbL%2BrYTWcEEIV0cz&X-Amz-Signature=73fa85f9536b90c59cf5fcee75dabf609a3c3fe565dd4424c627299f19763246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

