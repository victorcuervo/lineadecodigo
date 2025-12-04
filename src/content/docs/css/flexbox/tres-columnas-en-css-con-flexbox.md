---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTRWNDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCnLO23ssNBzN%2BfqNoycNsWFaApGCUzstVQhF6VDuzvVAIgfYgkQgk9Bydb4GNwkjsqfKW8MMXHbJsp3OSM5Nrfq6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIc86vQe5wcawBODmircA%2B3fcIXoe5jzpToX1H%2FzbM0lXBL7q3FgqZCYGDhV7Sfkzt2IubdMwYLiLprYLOEqrHd%2FIFpFmBFHD%2B%2F3DaNCIPj6we9noie7%2FSt0K4JUt54zODEO%2Bn5n%2BW%2ByrZ5BGzK5h8isEqnR3vsn6KpWbE6xyee2iFMRrk0xWpBHkneYkSOEO1HM0o5IpzqEUIE14%2BlQ1XrYUc%2FNnaahzmmmw8tGUJWWhmTExvNJJyAb1JyQdlP4utYnDiZq8aNZhmUPQSjdXTPFuIPLxKzVnASa789%2BrM3AF8j6sTLOXhDQwswmuqGK%2FfJovSwF%2B9Tkkrj5i%2FZSdse%2BwaQwEItV6ssD2Qex1%2BKC7yAVkcLcuPNDeSw1FrgSTuGS3AaME%2BXKG3WpVCgUrPphf%2Fvx2eqqh3OlAPW%2Bf2qAC%2FvU9E9T74ZcpN%2FIRssHtw7dfZcAWWsmm%2FtkbI4apydNWNFXjbMcM7STzMtij38B4lCFx7tqvo4cG3vVgdD3pajBVcL1Nr%2FtSpehY%2BXxsWeHJiq7I2d9FlgxosYpxeiJLI%2BZDvfRebKXCriAFflovsnjkAKEYzxpfnF9tzEO8CXRRGxfchkU7gw1H%2BA43Bo%2FZNs%2BLK7O6r7Wp0BEXuZSkjV3jhMl0IrNzdlWMM6Uw8kGOqUBi4NzTfOo8xPS8NlgV91xcRYTEf880nuCCspLfQ2nPKdZ7Ub2saUO9bVZOP69aUgX1q59UopPVPCMZQVNWZOCnbMSs%2FSOmTf8x9nrtcfaLCYHEyE0NmO5xW0hciPr9Rl2PmJ9XOTTY%2BFKAgtiTjeIdH63HpKZXnEkoat88FeG%2BctK02PAfgsqFhq6KDpbS34ZG6cVWk1pqhQlBdGU%2BhWlK%2BGGGjem&X-Amz-Signature=37ddfbb89609d4f69b5cccce22cd60ea0ac2f356500691239075f0de52ba1b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDTRWNDC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCnLO23ssNBzN%2BfqNoycNsWFaApGCUzstVQhF6VDuzvVAIgfYgkQgk9Bydb4GNwkjsqfKW8MMXHbJsp3OSM5Nrfq6Aq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDIc86vQe5wcawBODmircA%2B3fcIXoe5jzpToX1H%2FzbM0lXBL7q3FgqZCYGDhV7Sfkzt2IubdMwYLiLprYLOEqrHd%2FIFpFmBFHD%2B%2F3DaNCIPj6we9noie7%2FSt0K4JUt54zODEO%2Bn5n%2BW%2ByrZ5BGzK5h8isEqnR3vsn6KpWbE6xyee2iFMRrk0xWpBHkneYkSOEO1HM0o5IpzqEUIE14%2BlQ1XrYUc%2FNnaahzmmmw8tGUJWWhmTExvNJJyAb1JyQdlP4utYnDiZq8aNZhmUPQSjdXTPFuIPLxKzVnASa789%2BrM3AF8j6sTLOXhDQwswmuqGK%2FfJovSwF%2B9Tkkrj5i%2FZSdse%2BwaQwEItV6ssD2Qex1%2BKC7yAVkcLcuPNDeSw1FrgSTuGS3AaME%2BXKG3WpVCgUrPphf%2Fvx2eqqh3OlAPW%2Bf2qAC%2FvU9E9T74ZcpN%2FIRssHtw7dfZcAWWsmm%2FtkbI4apydNWNFXjbMcM7STzMtij38B4lCFx7tqvo4cG3vVgdD3pajBVcL1Nr%2FtSpehY%2BXxsWeHJiq7I2d9FlgxosYpxeiJLI%2BZDvfRebKXCriAFflovsnjkAKEYzxpfnF9tzEO8CXRRGxfchkU7gw1H%2BA43Bo%2FZNs%2BLK7O6r7Wp0BEXuZSkjV3jhMl0IrNzdlWMM6Uw8kGOqUBi4NzTfOo8xPS8NlgV91xcRYTEf880nuCCspLfQ2nPKdZ7Ub2saUO9bVZOP69aUgX1q59UopPVPCMZQVNWZOCnbMSs%2FSOmTf8x9nrtcfaLCYHEyE0NmO5xW0hciPr9Rl2PmJ9XOTTY%2BFKAgtiTjeIdH63HpKZXnEkoat88FeG%2BctK02PAfgsqFhq6KDpbS34ZG6cVWk1pqhQlBdGU%2BhWlK%2BGGGjem&X-Amz-Signature=afaaa65356877b71527e1ae3badb7cde99fc8fef1fcfbdc65569c7c5fae07f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

