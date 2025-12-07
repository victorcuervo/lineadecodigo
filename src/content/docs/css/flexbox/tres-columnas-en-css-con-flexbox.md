---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFBO4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB%2BCN%2FJYB99QHXCOndKA%2FZoHt8eWcjDLB3ylYJ5vnG5AiBWyZA7kVtlmHMcC4SFGI0%2FOoMiPkrGVKm6paAf2vHSoyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51KUZ7pQzJudySFvKtwD42PIrfslgtjDgA6uH4qgxE55H%2FTdH%2FRKHblkwQ3ArnbFvkLFtRPsQyNpI94c9wtUBmSfh55R0%2FLFnI9NrubZ%2FSrdR2AoATSuWFQ0AdS7fq%2FGLtysysK5UiPEyg2FyVYW5LAwxxMiSipDRSTgfF2Jo0cTekydgTNS2P0rc8xwdv%2BhZndhMSiubmZCGbmR%2F397wARmIJBFQ4v8GKC2SA9UVceQmYMQHVS6HLAVgcLLh3OUjl9GV%2BVyNF6lx5wLqjR7W9BC6W6YIxlB5oxJDBXMqxZzj3XG7TMuA3Z%2BfRDVIpfLTIRqUCLhpVU0v%2FLIqubGM7zidAtZKcxv2fbOzSNDjOCm3t8GyFjklPNWPw2BpVsJY8SXwCRn3dTxqB%2BbtaQihj62p1j1MBB%2BTiKxLbP26pgZ8pdfh0xDtTa4G2EVAMPXnDlFa4vFri76T7EuiIx5K3rkMJ5EkoVI4%2FUA1UEeXQXxnwMka3EoFysq74ExDFsaHAgJCTjJL%2F3tMjFN9eDy2M8eWQQ03KBw14c0VihAS8lhcD6Ppqu0%2FwFI9dGjbtfW5%2F6DUILtxc1Eza8BCt22gGYzU9%2FDAiP9sOLiAcnMu4%2BfdhlC8o2yLF3nx2cY5NPM0mU6QCH%2FJM5e0dQwn5zUyQY6pgFruiKkMzp107VHD3KuOAIornuXtent%2BjPNsnEUmwK1lGDHl9mmNSPnoIzuc7fmEzb1Hd3bPxRZYOUW85nMvLHyrel4Dv6EdP%2BsnYEOWSyaQSylyI5gSvTRAlP7SiYcsBMwRSsh3T9jqCAz4BqYAvap8k%2BcH7pCLudiyhTHhFhwzNA4voJxlIFqE0JF%2FOts5JpAxlIN7xkSdGAhSKGOcDwYewHEg6DY&X-Amz-Signature=00296f3d377d74ba93287c0a5b66ff7faa5ce6f32af7e4441e60493133358580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6NFBO4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T083914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHB%2BCN%2FJYB99QHXCOndKA%2FZoHt8eWcjDLB3ylYJ5vnG5AiBWyZA7kVtlmHMcC4SFGI0%2FOoMiPkrGVKm6paAf2vHSoyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM51KUZ7pQzJudySFvKtwD42PIrfslgtjDgA6uH4qgxE55H%2FTdH%2FRKHblkwQ3ArnbFvkLFtRPsQyNpI94c9wtUBmSfh55R0%2FLFnI9NrubZ%2FSrdR2AoATSuWFQ0AdS7fq%2FGLtysysK5UiPEyg2FyVYW5LAwxxMiSipDRSTgfF2Jo0cTekydgTNS2P0rc8xwdv%2BhZndhMSiubmZCGbmR%2F397wARmIJBFQ4v8GKC2SA9UVceQmYMQHVS6HLAVgcLLh3OUjl9GV%2BVyNF6lx5wLqjR7W9BC6W6YIxlB5oxJDBXMqxZzj3XG7TMuA3Z%2BfRDVIpfLTIRqUCLhpVU0v%2FLIqubGM7zidAtZKcxv2fbOzSNDjOCm3t8GyFjklPNWPw2BpVsJY8SXwCRn3dTxqB%2BbtaQihj62p1j1MBB%2BTiKxLbP26pgZ8pdfh0xDtTa4G2EVAMPXnDlFa4vFri76T7EuiIx5K3rkMJ5EkoVI4%2FUA1UEeXQXxnwMka3EoFysq74ExDFsaHAgJCTjJL%2F3tMjFN9eDy2M8eWQQ03KBw14c0VihAS8lhcD6Ppqu0%2FwFI9dGjbtfW5%2F6DUILtxc1Eza8BCt22gGYzU9%2FDAiP9sOLiAcnMu4%2BfdhlC8o2yLF3nx2cY5NPM0mU6QCH%2FJM5e0dQwn5zUyQY6pgFruiKkMzp107VHD3KuOAIornuXtent%2BjPNsnEUmwK1lGDHl9mmNSPnoIzuc7fmEzb1Hd3bPxRZYOUW85nMvLHyrel4Dv6EdP%2BsnYEOWSyaQSylyI5gSvTRAlP7SiYcsBMwRSsh3T9jqCAz4BqYAvap8k%2BcH7pCLudiyhTHhFhwzNA4voJxlIFqE0JF%2FOts5JpAxlIN7xkSdGAhSKGOcDwYewHEg6DY&X-Amz-Signature=d8bb94aea6edc3133dfbb1f60f3557bf5ed3ad2d81978865f889cf4283097482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

