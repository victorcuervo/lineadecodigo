---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWVGNIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZRy3mzg2%2F9vUr%2BlwutC4iyQEjKHA%2Fsz5bzGriB47HoAiEA9ajxptRot9s2USNyiHSChKh2Giclwbl1RoambZUM3xYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLY7UgR%2BHjoGoa2BkSrcAxMWViYwFkkUCHgqsilTyET68VPCLx%2FiUDkjn6%2Ff2Sd0P75Eg0nXuf61BnUIyPa0L2I50FeBrnZmr74yghi05gxLs9PqPMzmAPCPApdrS5Ki3auAHGW3jfqbcSv68Hm4qod%2Fdc%2FoRlO0CA5M0XgZ6XgXh%2FpQv7xsBaPpDXlnq17k%2FPy5n2STJuTW6IY9JZGaVm3cVsoRLhbZ2RwXo43Quw4kS%2Fdh5ErDVzjFUkeIS0P6lvVI%2FJm8FgtATUTv%2FcEcVTO%2FpphqhO%2Ba%2FFcReZSBJwgitW3yk8qFD5dfO86%2Fz4%2BYHQjmXV5u7e7%2Fcfd0f4hg4bkS091Wf6yJt7cDH%2BHWF7VCWSssUCzHY1nRuPXBwTrPnRIaoGuMi9RFWGgc%2BlWaa2fXe3KODGGJmEuITJW1ho5o3%2F4j%2BhHzMUYAwtspBhxv5QGw77dP6e2wohEKqa9KPjlDrzj5QFJ%2F7pvRnQ8cDHfaKBcvZaVF69HnWH6UJ9zUFAuXeEVe%2FjAkqBfLWc1Jiyn%2FZtCFR143cZl0Nd6PAB1WwDKeS6F0ATi7ZHbhCpX95BTvoIgtu4cK7LJ4OraLzU0Nempa8FET9pDoNyxDBbIj%2FbgXA19x4VQFdFseiqc47q5siGhykUDGBuVFMJaMyMkGOqUBYdpvhr%2BH7rLVpldcHlA%2BBv2cOEjvNCsCxS2%2FpgwQy8HioToCsU46%2BlZFdtTgvHE2yZ7K12lDPXY9bTH5sCLpXEnOwm%2FJDXEjNi8PJkVf58OQ4nk3o4B4HOcHIcgwRalpMuxBoLOg63EMoV1MYSjJbIZnQL92haPw%2FadTCsVfctADV5CV8swuWcbcZRTUQQRb%2Fh0JdQRaTyJJGc5ovn55erNiNJWl&X-Amz-Signature=bbf0e27effe29b1362400facffc7f2adaa58d0e63eaa5e7ccee07a51733d9339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPWVGNIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZRy3mzg2%2F9vUr%2BlwutC4iyQEjKHA%2Fsz5bzGriB47HoAiEA9ajxptRot9s2USNyiHSChKh2Giclwbl1RoambZUM3xYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLY7UgR%2BHjoGoa2BkSrcAxMWViYwFkkUCHgqsilTyET68VPCLx%2FiUDkjn6%2Ff2Sd0P75Eg0nXuf61BnUIyPa0L2I50FeBrnZmr74yghi05gxLs9PqPMzmAPCPApdrS5Ki3auAHGW3jfqbcSv68Hm4qod%2Fdc%2FoRlO0CA5M0XgZ6XgXh%2FpQv7xsBaPpDXlnq17k%2FPy5n2STJuTW6IY9JZGaVm3cVsoRLhbZ2RwXo43Quw4kS%2Fdh5ErDVzjFUkeIS0P6lvVI%2FJm8FgtATUTv%2FcEcVTO%2FpphqhO%2Ba%2FFcReZSBJwgitW3yk8qFD5dfO86%2Fz4%2BYHQjmXV5u7e7%2Fcfd0f4hg4bkS091Wf6yJt7cDH%2BHWF7VCWSssUCzHY1nRuPXBwTrPnRIaoGuMi9RFWGgc%2BlWaa2fXe3KODGGJmEuITJW1ho5o3%2F4j%2BhHzMUYAwtspBhxv5QGw77dP6e2wohEKqa9KPjlDrzj5QFJ%2F7pvRnQ8cDHfaKBcvZaVF69HnWH6UJ9zUFAuXeEVe%2FjAkqBfLWc1Jiyn%2FZtCFR143cZl0Nd6PAB1WwDKeS6F0ATi7ZHbhCpX95BTvoIgtu4cK7LJ4OraLzU0Nempa8FET9pDoNyxDBbIj%2FbgXA19x4VQFdFseiqc47q5siGhykUDGBuVFMJaMyMkGOqUBYdpvhr%2BH7rLVpldcHlA%2BBv2cOEjvNCsCxS2%2FpgwQy8HioToCsU46%2BlZFdtTgvHE2yZ7K12lDPXY9bTH5sCLpXEnOwm%2FJDXEjNi8PJkVf58OQ4nk3o4B4HOcHIcgwRalpMuxBoLOg63EMoV1MYSjJbIZnQL92haPw%2FadTCsVfctADV5CV8swuWcbcZRTUQQRb%2Fh0JdQRaTyJJGc5ovn55erNiNJWl&X-Amz-Signature=b452fc273a69143dff07ab10a708b41afd5612aba2da6d7fcf41f5a747a0cfdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

