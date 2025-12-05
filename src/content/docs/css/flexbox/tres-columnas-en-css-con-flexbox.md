---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552GZWWK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNhOln1suKbuV2pAvx7HhHzVy0OBeYv%2BuFIpEgAD9IjgIgdq8%2FC5092BpybGSzmTS3%2BHwVcpKiWZKBESNcnkCJpHYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIBspoeuSTRIfFi%2BOircA6GqqfnGL%2BQ%2BQh8xMnD%2B0b2tGVe7z4rDIEee9tI%2F83%2Bt0LYxOk%2Fz8BjBKuLdAFt2AHnY6jgbyWtjzoEX7YQYf1j8k%2BA4DChXpPkOWfOaoLDAdh7fZKUQJ%2FYTvMvHCORHRWOEKGoaQDST0Is0%2FqXNGo0nPo8%2FeWvvIvffELcNaWc1HWhKDQg1WK64uRfEGdCyF9f7t2BAp4KcPcbX4eAByuUma3%2Fg4HTl%2FC%2BHztvL3F6jWn0S3PuVhNZnHCKkheGQCiuKKLrNZdWmqZG6kXI%2BbhY7PHeI%2BdZtUeFAaeAhZ1i5qiEevFlZpTCpNax1j5SIk9gGP%2B3P2CtnVeFVSiFDOWs1z6APCThU8CQbEbA9qN7rEHuQ2laMWwDb9%2BuwB4jBo2ogjTxFKOFS8enUOzQVJagakTVJYvFHTBPZ9ThXMdcyZXYM5MjKQqFd%2BSlHr1Nr6rIlatfvvxuO2hAraUCsSHhIAKInJ4G6OlfzOGudT%2Bo2NPfc0kMiTvmHi5tE0MBa3HaoUi8qe9dWrNpwrAoJa%2F%2BdVK94mc2hDBQyZ1IR8SPos7rXP%2FI6pDcoiQsBT1ZQFEWFtbPyjj2PiAiNLZL%2BYMRToImPQ0r3zRKMDLjBcpxxtrI50OELFi0j%2BLBDMIvKy8kGOqUBKTxFzkYdahB%2BvX22yPcCYOHrPaMrTuS79ol%2BwIdIZxTHj7DKkF%2Fqcup0oCzU95k7KdWi6ov1ZSIV9cnxvch3fcSllL2%2FMhmKZ1mMnPxzNwYVaF%2FNFW%2FpP%2Bnm2GkocvWXblFJA8cQlqBbytWxQpMQvcnoMXSWGS5u7V9mCMzdKvMWkjRgnG0BInU%2BYVOa0QGMk09AYHEvAe1UcJmVe%2FnHUIYKh4Bh&X-Amz-Signature=b9880a952718e9d475e873b7c5f2184d787302734caf396a1e3bbd8f58c3533a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552GZWWK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNhOln1suKbuV2pAvx7HhHzVy0OBeYv%2BuFIpEgAD9IjgIgdq8%2FC5092BpybGSzmTS3%2BHwVcpKiWZKBESNcnkCJpHYq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDIBspoeuSTRIfFi%2BOircA6GqqfnGL%2BQ%2BQh8xMnD%2B0b2tGVe7z4rDIEee9tI%2F83%2Bt0LYxOk%2Fz8BjBKuLdAFt2AHnY6jgbyWtjzoEX7YQYf1j8k%2BA4DChXpPkOWfOaoLDAdh7fZKUQJ%2FYTvMvHCORHRWOEKGoaQDST0Is0%2FqXNGo0nPo8%2FeWvvIvffELcNaWc1HWhKDQg1WK64uRfEGdCyF9f7t2BAp4KcPcbX4eAByuUma3%2Fg4HTl%2FC%2BHztvL3F6jWn0S3PuVhNZnHCKkheGQCiuKKLrNZdWmqZG6kXI%2BbhY7PHeI%2BdZtUeFAaeAhZ1i5qiEevFlZpTCpNax1j5SIk9gGP%2B3P2CtnVeFVSiFDOWs1z6APCThU8CQbEbA9qN7rEHuQ2laMWwDb9%2BuwB4jBo2ogjTxFKOFS8enUOzQVJagakTVJYvFHTBPZ9ThXMdcyZXYM5MjKQqFd%2BSlHr1Nr6rIlatfvvxuO2hAraUCsSHhIAKInJ4G6OlfzOGudT%2Bo2NPfc0kMiTvmHi5tE0MBa3HaoUi8qe9dWrNpwrAoJa%2F%2BdVK94mc2hDBQyZ1IR8SPos7rXP%2FI6pDcoiQsBT1ZQFEWFtbPyjj2PiAiNLZL%2BYMRToImPQ0r3zRKMDLjBcpxxtrI50OELFi0j%2BLBDMIvKy8kGOqUBKTxFzkYdahB%2BvX22yPcCYOHrPaMrTuS79ol%2BwIdIZxTHj7DKkF%2Fqcup0oCzU95k7KdWi6ov1ZSIV9cnxvch3fcSllL2%2FMhmKZ1mMnPxzNwYVaF%2FNFW%2FpP%2Bnm2GkocvWXblFJA8cQlqBbytWxQpMQvcnoMXSWGS5u7V9mCMzdKvMWkjRgnG0BInU%2BYVOa0QGMk09AYHEvAe1UcJmVe%2FnHUIYKh4Bh&X-Amz-Signature=8a4710eae6a65a6dfdaba032043e04997fd0435d48485ff31ab8ce4bc56e12f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

