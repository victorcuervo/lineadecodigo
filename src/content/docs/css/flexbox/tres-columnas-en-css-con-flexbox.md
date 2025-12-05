---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFKJBRF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEpyPcd%2FeoEuR6uAeXb7zFfkKDkFDHocUpPUy%2BzSoelwIhAJbLOO82DbQz7op1RLG6I%2FcnHmfwW5lG8%2BBRAgckkLZpKv8DCF8QABoMNjM3NDIzMTgzODA1Igy9PgSK8mf3ALuNxUcq3AMwRPe8uM6EZNVfFZWgUq7PMYiJUHMOAe4vYLXfuGbfEbTyRyqF0OdQPcubNeJceoSahAhhQ%2FfYDlz6%2B%2FJBPjJfnlhmrucEhZWlwIltQc4DwyruAe6lMgiR9DN2kXDzKojAGnI%2BJGTP7q2ibmx5Dkz4bxtdBqxYB2no8dmnpl950S3%2FTaIlmkdjpCOtI9ax5Igf46bdt%2BT39aYSng126ZeoXsLn32SZUN6vSTUpmYtbta6njwY3MEGe5YsA5u%2FlkFAiQRwzWTOZWYfNsVaVXQEDBUlmqsf0kZF7aGiPXz%2Boxx8mm6ac7ChIChNtEwMpiPF%2BJqXyK1EHa3GBXwV1ryuqUy2SN4QaIdI3XgV8K37roQA9U7BxgPE4EqKrr73SmOo5lJeE91taKk%2BFC28m6sHSl4bIxJ4sA%2BE%2FdI%2FKwdpD2%2FlqdsBjZeRhBjED5rwDTVJ7VIqX%2F6CSjtEibnSbPD67Q%2F0T6nj2V41SqsCl7TsBX4jNjQSqaKbC%2BXcRuJXhM3ErSOzCjCPdMVWJKNWA6tID9%2F8z6Clka2ujtKFUfgn7DCnwY8WEKGIbH6qHZx8NVaGMR2RzW8GHYoxvpsQKFchtnvHLxFnVry49dCJwRDOD1ZzGkEsTx749EhwY8TD6zMvJBjqkAThLy%2FwCWyJABpZc4Uc%2FGcU00JhOTibCIMOBCrT0Ft1PaqvMD29%2BhsnM3HJftA7zAC8xdJOFx8x6udmJa3KC2SF36kDUjZ3EqPos8nXLLxHOZ9zepDbFmFOV4SuHnjX9DagCzrakgPcQx1BFDuCsRRowLK9bHtdRkjyAiFUWYX%2BGHtnTpesdj7na84XDi1X49HrEFh8brRLr5NMt6oSApdxvHsWP&X-Amz-Signature=5bd4f18c2df3f5bb895bf6d46fe0c9d958f412b9a5e01d7f4e8b9967c77d9881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFKJBRF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEpyPcd%2FeoEuR6uAeXb7zFfkKDkFDHocUpPUy%2BzSoelwIhAJbLOO82DbQz7op1RLG6I%2FcnHmfwW5lG8%2BBRAgckkLZpKv8DCF8QABoMNjM3NDIzMTgzODA1Igy9PgSK8mf3ALuNxUcq3AMwRPe8uM6EZNVfFZWgUq7PMYiJUHMOAe4vYLXfuGbfEbTyRyqF0OdQPcubNeJceoSahAhhQ%2FfYDlz6%2B%2FJBPjJfnlhmrucEhZWlwIltQc4DwyruAe6lMgiR9DN2kXDzKojAGnI%2BJGTP7q2ibmx5Dkz4bxtdBqxYB2no8dmnpl950S3%2FTaIlmkdjpCOtI9ax5Igf46bdt%2BT39aYSng126ZeoXsLn32SZUN6vSTUpmYtbta6njwY3MEGe5YsA5u%2FlkFAiQRwzWTOZWYfNsVaVXQEDBUlmqsf0kZF7aGiPXz%2Boxx8mm6ac7ChIChNtEwMpiPF%2BJqXyK1EHa3GBXwV1ryuqUy2SN4QaIdI3XgV8K37roQA9U7BxgPE4EqKrr73SmOo5lJeE91taKk%2BFC28m6sHSl4bIxJ4sA%2BE%2FdI%2FKwdpD2%2FlqdsBjZeRhBjED5rwDTVJ7VIqX%2F6CSjtEibnSbPD67Q%2F0T6nj2V41SqsCl7TsBX4jNjQSqaKbC%2BXcRuJXhM3ErSOzCjCPdMVWJKNWA6tID9%2F8z6Clka2ujtKFUfgn7DCnwY8WEKGIbH6qHZx8NVaGMR2RzW8GHYoxvpsQKFchtnvHLxFnVry49dCJwRDOD1ZzGkEsTx749EhwY8TD6zMvJBjqkAThLy%2FwCWyJABpZc4Uc%2FGcU00JhOTibCIMOBCrT0Ft1PaqvMD29%2BhsnM3HJftA7zAC8xdJOFx8x6udmJa3KC2SF36kDUjZ3EqPos8nXLLxHOZ9zepDbFmFOV4SuHnjX9DagCzrakgPcQx1BFDuCsRRowLK9bHtdRkjyAiFUWYX%2BGHtnTpesdj7na84XDi1X49HrEFh8brRLr5NMt6oSApdxvHsWP&X-Amz-Signature=389b680c6785c60432215660376c5171059e5456bc4432ba66259f49efad0028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

