---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZYVB6E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FHTgjLOKibha6XlXSLZE1zMbkgeyTOgp0yxPoNqlMMwIgHyw6fe3sIhdf1BUoeegHkkMZ0rBWKL0CMD8RYRCho60qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoDcEiaMVEK3ZU6VyrcA9ThQZUdsta4exbYFQsFzd0%2FSlGHSZg4ud3wM86IUSR5dwTr0Vwsq8M6vJX1VXE5cLiWxNuLm%2Ff%2BtJmwlJcvv9hsYWUtfmVQpm70FakCXASnNLTGaGH1wcOZzc6FtgzaKx3RwmaM8zXGkfts9ruBhaBuhyKYxgu%2Fqbp1aOzsUKHROnhV7q4D2eW9RxSIvYtb9rOui7wnczGKvJYUvUdbeYN81oqRn4dJkjyisqwhd1rQj%2FoMChswSEeAXZAjEu9QcIiPWtl%2FcXBhPX3vVkIxbhrYX%2FVKAacVdOF1TToGlzYOiqGgz2veiX%2BMmo2sGC%2BC%2Bpbgxwd9Mf%2F0oaMPHZkjgDk5TKN8J4I3dCsz14CeVet4GhxA69BHo%2Bu3q6Wme3lncsJDqBXd1i70j2liDTjWhzaUUFHcvOUQi4LvhunYRaq%2FUg8cNS0PYDH6c7EdDGWnauvIOUdl%2Fm1LombCTSEXPMJcJGG7v6VEW%2FmMHTgJAUgE1Jo23rGe1vG%2Bypzh1OB4JQU5A9Thh71gAi2vlxo4mS%2B0xCIUx6Sl7mlc1lLoES7KJbycsO%2BJg4%2F547eHdMDJkeKJwfue9indlFtza9EMj147QXsp57ryURUIFJ1y3D6PAPJCq%2FbNCnBUIO2vMMKh2MkGOqUB82G4ncbecxKk4sS4xcq5RAZmpGeG4gEGAhBhXO7r0fiZU2%2BPKotUQ7dLN4jIInqdH2GdxL7xF4AYOKuUD%2FAX4v9IxZsT3G1Nswpy1mk%2FI%2FpA6sOirMide13oXNIcgr1m4wnwO%2Fa6U70JG3QDkmfWv0OQBrOUPiPRDlFavsnvzo1qJJfu%2F3yT6ALfmbtZFBuhrGU%2BJaYnp3eCM0QwRQ9MEtT%2FqjAw&X-Amz-Signature=fc04b0669105e7fc58e7ca66ad45f0e4989993c1ab5f4a320703a010ab7adbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEZYVB6E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T000220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FHTgjLOKibha6XlXSLZE1zMbkgeyTOgp0yxPoNqlMMwIgHyw6fe3sIhdf1BUoeegHkkMZ0rBWKL0CMD8RYRCho60qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoDcEiaMVEK3ZU6VyrcA9ThQZUdsta4exbYFQsFzd0%2FSlGHSZg4ud3wM86IUSR5dwTr0Vwsq8M6vJX1VXE5cLiWxNuLm%2Ff%2BtJmwlJcvv9hsYWUtfmVQpm70FakCXASnNLTGaGH1wcOZzc6FtgzaKx3RwmaM8zXGkfts9ruBhaBuhyKYxgu%2Fqbp1aOzsUKHROnhV7q4D2eW9RxSIvYtb9rOui7wnczGKvJYUvUdbeYN81oqRn4dJkjyisqwhd1rQj%2FoMChswSEeAXZAjEu9QcIiPWtl%2FcXBhPX3vVkIxbhrYX%2FVKAacVdOF1TToGlzYOiqGgz2veiX%2BMmo2sGC%2BC%2Bpbgxwd9Mf%2F0oaMPHZkjgDk5TKN8J4I3dCsz14CeVet4GhxA69BHo%2Bu3q6Wme3lncsJDqBXd1i70j2liDTjWhzaUUFHcvOUQi4LvhunYRaq%2FUg8cNS0PYDH6c7EdDGWnauvIOUdl%2Fm1LombCTSEXPMJcJGG7v6VEW%2FmMHTgJAUgE1Jo23rGe1vG%2Bypzh1OB4JQU5A9Thh71gAi2vlxo4mS%2B0xCIUx6Sl7mlc1lLoES7KJbycsO%2BJg4%2F547eHdMDJkeKJwfue9indlFtza9EMj147QXsp57ryURUIFJ1y3D6PAPJCq%2FbNCnBUIO2vMMKh2MkGOqUB82G4ncbecxKk4sS4xcq5RAZmpGeG4gEGAhBhXO7r0fiZU2%2BPKotUQ7dLN4jIInqdH2GdxL7xF4AYOKuUD%2FAX4v9IxZsT3G1Nswpy1mk%2FI%2FpA6sOirMide13oXNIcgr1m4wnwO%2Fa6U70JG3QDkmfWv0OQBrOUPiPRDlFavsnvzo1qJJfu%2F3yT6ALfmbtZFBuhrGU%2BJaYnp3eCM0QwRQ9MEtT%2FqjAw&X-Amz-Signature=669ca7d4e19719fba1eb1aa335597c0d450ace783229828cc092e1c7f8c8f78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

