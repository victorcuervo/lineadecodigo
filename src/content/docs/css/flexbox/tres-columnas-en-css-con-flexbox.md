---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJWZC4E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERTEtLMVZl1kWpqwSq0Dfz0sxPw6fAnGCmQBReB14l5AiEA2AnchIY7aQuzMzEFVJae1yfsuduBp0DZn46dO4QldScq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJPip62CeZbN7MasdyrcAwiVjlkC974M3zoQ5fbtXTBS%2FDqya7k%2BsqDeHCpRfshjT%2B0psUMBgymMxDat6LNvAD4WJIsl6%2FjDcOfyNqskMpEGPSOCLHKOB1uzPEpD9wRDpbk2Uv83M7ZuXLUoxyW89YULBYeJhzkMIZSe%2FmZGzNS9iDoLeoVj2HTipB7NP%2BSrJRdOGAXH4cpi%2BH33xfrvtaclFInuev5vDVMBpaaxZuQYvtkeCZQbofihKTJGYBgkOxk5IfvOkkIuMWAtjUigfJrakLQcv8n6FotUvGmD99kNTb3xQBcvoaBOBkm%2FR3C8TSd5n0C1I2Fs7rJ3n0u3HY02AWCiKKwQHRsqS%2FE4cnwfqsVm3cr3nYM79cQb37PXHpqL%2F7aYcssLcUCoypuvZEzrfOw8Oia0nwhM35KMemzQC1xLo3RbxFRgEHmm2a6qK%2BVaFYxRIfc3wWMA%2FhLcRp3BL%2B6vXh0TtUxAbCY%2F3yTWVn29QrU7Lct0SxlA09oRPXxSzO5WZxt2dqq3sUvkEf5Dg8WoyvO1L8TKOj1W3l8TVoRzHjqiq5Cr6GKOwqQh9%2FDDPrLa6a9HawCJXqCOcNu%2BLSdcNIkmKrkrusWIiRQazVYliKVO624GYANG9O5p5iBVSCxW8xQKEXE9MKeuyckGOqUBXwiGS8Cca%2B8eKmABJVDmpSL78h%2BMqcK4WAqGI8IxRPz6cSAaUXqZBpehzvZgCxKCKLiiu%2BAAjkJ44zuHVzoNRTrI65lGh4Grr7g91arpf36FBk5Yeg0XjK7j08vnzLVKIGjhV44qWcmpSEEBRijB5oPHGLifG1MblxihZB2%2BcMxJ%2Bl2sc201%2BM%2Bn%2BQVu1ICeRO5oROQBjzZGrSw84DVDPR4vOM6E&X-Amz-Signature=a4d7e397485bb5821016f7a77c0026b9b6e240025d330b5fbd85966e0e10457a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJWZC4E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERTEtLMVZl1kWpqwSq0Dfz0sxPw6fAnGCmQBReB14l5AiEA2AnchIY7aQuzMzEFVJae1yfsuduBp0DZn46dO4QldScq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJPip62CeZbN7MasdyrcAwiVjlkC974M3zoQ5fbtXTBS%2FDqya7k%2BsqDeHCpRfshjT%2B0psUMBgymMxDat6LNvAD4WJIsl6%2FjDcOfyNqskMpEGPSOCLHKOB1uzPEpD9wRDpbk2Uv83M7ZuXLUoxyW89YULBYeJhzkMIZSe%2FmZGzNS9iDoLeoVj2HTipB7NP%2BSrJRdOGAXH4cpi%2BH33xfrvtaclFInuev5vDVMBpaaxZuQYvtkeCZQbofihKTJGYBgkOxk5IfvOkkIuMWAtjUigfJrakLQcv8n6FotUvGmD99kNTb3xQBcvoaBOBkm%2FR3C8TSd5n0C1I2Fs7rJ3n0u3HY02AWCiKKwQHRsqS%2FE4cnwfqsVm3cr3nYM79cQb37PXHpqL%2F7aYcssLcUCoypuvZEzrfOw8Oia0nwhM35KMemzQC1xLo3RbxFRgEHmm2a6qK%2BVaFYxRIfc3wWMA%2FhLcRp3BL%2B6vXh0TtUxAbCY%2F3yTWVn29QrU7Lct0SxlA09oRPXxSzO5WZxt2dqq3sUvkEf5Dg8WoyvO1L8TKOj1W3l8TVoRzHjqiq5Cr6GKOwqQh9%2FDDPrLa6a9HawCJXqCOcNu%2BLSdcNIkmKrkrusWIiRQazVYliKVO624GYANG9O5p5iBVSCxW8xQKEXE9MKeuyckGOqUBXwiGS8Cca%2B8eKmABJVDmpSL78h%2BMqcK4WAqGI8IxRPz6cSAaUXqZBpehzvZgCxKCKLiiu%2BAAjkJ44zuHVzoNRTrI65lGh4Grr7g91arpf36FBk5Yeg0XjK7j08vnzLVKIGjhV44qWcmpSEEBRijB5oPHGLifG1MblxihZB2%2BcMxJ%2Bl2sc201%2BM%2Bn%2BQVu1ICeRO5oROQBjzZGrSw84DVDPR4vOM6E&X-Amz-Signature=84d6667aa2b3a3da2b0f3ab4c7dcfc75d7f0c6c642ed1e0423066aecf019f4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

