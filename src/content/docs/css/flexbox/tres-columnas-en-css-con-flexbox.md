---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7BO4HJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2T26iHbA1z%2Bohii8Tpga4uAiK9CpJv8sdU80W48m38AiEAkWdXnfSZzw1ok9KoMS3WvIeakrOO1HdsutPsYGQRDlsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCZrTuUR120bG9r4BSrcA6l0LsklRofoE%2FZNP2JzSPsrg64R1OEtVAw8f%2F74DPtJY8UyseeS17FUVTTGt%2BUAAkcfX9%2BO4mmPAcj8oswFCKSQ2IYUqC8bcuElbUWevBnZs2yBMCycqRdQXzPciPUn8M0MccJXnT6TqDOkmlzgNOjmC%2FU%2FMmANqTQSYkU21q9QrfwGSOKeDxn2R0O8kmB9EBUa1pepFj7lI5FzOCmTVE1HDnXj%2BYgXybYzGL75Zk6FiP6zE9%2FJjL7DZ9J6I5xkwVNsHZiNsrWn2iBrE3VI%2BLb%2BEFVYbc9v4%2FXbQvTsdrwX1ojNccIp1j7B9oB49mGehys5c5hEh6vZnVo0RRX%2BTtNYl0uOiA%2BCDgGrT33%2BAJfOydQMu7vO6VELaUucKLyLlKrRZ7CULlbcCCGWEBw%2FoysagY3eYQq4B%2FzBuqSoF%2BKSSU%2BmO4KQ8Hh0iNNSJy9NboAILOA8qA2oD7jVsFBrPKtAvKNpCwBMTr16OarLbwU40D4ZPT%2FediwHhWYWIz6C%2BV4gnbgeK3qaoyrSbRwCqCospR%2FYGQQVA9oBgl7LslCfRLdwUDmxh7B%2FxFiRzBbVuSugk1y1hxDBEQJ08rcRyfEY9tOjD9ZP3QPh6j%2B7XU1MLxljzp%2B7PmAjgXwyMMWm0MkGOqUBD3yaibbvo%2FYHOrSgYD1fnAfT58y8Op7sad4sDM2JzOGwwi0aUDjvHjzc94mHIPJVQRIvPgIbck6PmeQCO3cnGOzJhnA4%2FXZynmg4VeGJPAXTYG9KCGeTdH%2FwJErewZJeqFH%2FzTDCZFZa53T3MeK7kfJP%2F4e0wGkBakcDrz0BdEv3juWnmHVUtSnuQ5W18A8nzFiP3bQDHBh%2FyH1pGC7NT68AKjEf&X-Amz-Signature=84c4495b43cbb9bc231e7684e7138687fbe471adf0688e118705dbf6cc0c046d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7BO4HJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2T26iHbA1z%2Bohii8Tpga4uAiK9CpJv8sdU80W48m38AiEAkWdXnfSZzw1ok9KoMS3WvIeakrOO1HdsutPsYGQRDlsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCZrTuUR120bG9r4BSrcA6l0LsklRofoE%2FZNP2JzSPsrg64R1OEtVAw8f%2F74DPtJY8UyseeS17FUVTTGt%2BUAAkcfX9%2BO4mmPAcj8oswFCKSQ2IYUqC8bcuElbUWevBnZs2yBMCycqRdQXzPciPUn8M0MccJXnT6TqDOkmlzgNOjmC%2FU%2FMmANqTQSYkU21q9QrfwGSOKeDxn2R0O8kmB9EBUa1pepFj7lI5FzOCmTVE1HDnXj%2BYgXybYzGL75Zk6FiP6zE9%2FJjL7DZ9J6I5xkwVNsHZiNsrWn2iBrE3VI%2BLb%2BEFVYbc9v4%2FXbQvTsdrwX1ojNccIp1j7B9oB49mGehys5c5hEh6vZnVo0RRX%2BTtNYl0uOiA%2BCDgGrT33%2BAJfOydQMu7vO6VELaUucKLyLlKrRZ7CULlbcCCGWEBw%2FoysagY3eYQq4B%2FzBuqSoF%2BKSSU%2BmO4KQ8Hh0iNNSJy9NboAILOA8qA2oD7jVsFBrPKtAvKNpCwBMTr16OarLbwU40D4ZPT%2FediwHhWYWIz6C%2BV4gnbgeK3qaoyrSbRwCqCospR%2FYGQQVA9oBgl7LslCfRLdwUDmxh7B%2FxFiRzBbVuSugk1y1hxDBEQJ08rcRyfEY9tOjD9ZP3QPh6j%2B7XU1MLxljzp%2B7PmAjgXwyMMWm0MkGOqUBD3yaibbvo%2FYHOrSgYD1fnAfT58y8Op7sad4sDM2JzOGwwi0aUDjvHjzc94mHIPJVQRIvPgIbck6PmeQCO3cnGOzJhnA4%2FXZynmg4VeGJPAXTYG9KCGeTdH%2FwJErewZJeqFH%2FzTDCZFZa53T3MeK7kfJP%2F4e0wGkBakcDrz0BdEv3juWnmHVUtSnuQ5W18A8nzFiP3bQDHBh%2FyH1pGC7NT68AKjEf&X-Amz-Signature=bc1f6b6aa01d93fed1413b295689922fe0aabfaa8f5704d24fe93f377e5a4b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

