---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGV5QW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClgag%2F%2BjrU7ptt54835w49pwrJRXPOdMyYrLQOXCy4QAiEAxOR96l%2B2Y3DCzPmVYLvDnCRijTXwEBulW6QWlyGvEIAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyKuKE49lZFCAfw2yrcA8jdd3IRI0pz7pKEhduU%2BaYoZaUmbcILgeIjchTTudBtN%2Bvnf0QlWBTfw5iCNr914ckF8u6TYR583XoxngGuBtrsYqgtnhUA1SuHgd%2F811QUwC3uYwwnMSBGjuBnVYN%2Fdztm%2FnNp2w1DcdeB5PMIzOs0YmSnSVZtxD0R9%2BNScGf8A4%2F%2B9m3C6Qg5BJHvamfmOmPBeWpZBYJouiLKchA5%2Bq6XmNoJsl%2BLoo0MBkfIKUyuYiLnb1hPshyhCnlI8c4gz7FK9WTHhb352c%2BS0KnCDo7RuuJK4F10Lgco4MNtiq62kXEVCmDJR6bap1C4ABvHbD15YtauSBY6MsWL9JtHkBGlsD%2BhHTYpOA%2FM0xt9I60fPHVDQBmcuGXFRdAR9nsGXR%2FXNsrD8%2B9l3%2BL7j6mz%2BUeEFHr3%2Bx1Q1GDl%2FN6%2BKV9nsRRisWgbuWVPATvBFQpu4hM%2FvSZ6CvRqhj5m0CAHomf1KO3Q%2BqnG8jA6H998Es3cwTRsB7Oecbjd%2Btg1gxJzfqEEh6mCC250aSt6v30cz7D2iCsGKZPZF0qywXP103T3wa9D%2B%2FsYpJIrR3PzgEzH9MRbBBQYIG7veCIWvXO%2FC3kRnDSuA6bCxGmDT7qaUI5qfhyXgugqiEuaMyXfMPDk3skGOqUBVOPUhFn9MwLgRfK6PEjVEVFdGGBw0Hyp%2B%2FKZIPnMLDCeCvBdkFPt5Udvv2ASTh%2BCuQaR%2BAAFS60eplV57Bsz%2FFX6J1QQplBzs2u7Wg%2Bbdqu6Lf%2FIllfLUdMWBr6kUOUKJpii%2FcpSqF%2Fj5rxUdkFFo%2FNNRDmfMCxcNwMwut8CERJDLNaHvh1iElmlR3acqpBpUp1KZvVuofLo8p0REUrCWL8dehfZ&X-Amz-Signature=4a3614f3d04f8c84033e08fa6a097a313a931c0c297bd45e4ccc806d1d87d2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSLGV5QW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T052738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClgag%2F%2BjrU7ptt54835w49pwrJRXPOdMyYrLQOXCy4QAiEAxOR96l%2B2Y3DCzPmVYLvDnCRijTXwEBulW6QWlyGvEIAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyKuKE49lZFCAfw2yrcA8jdd3IRI0pz7pKEhduU%2BaYoZaUmbcILgeIjchTTudBtN%2Bvnf0QlWBTfw5iCNr914ckF8u6TYR583XoxngGuBtrsYqgtnhUA1SuHgd%2F811QUwC3uYwwnMSBGjuBnVYN%2Fdztm%2FnNp2w1DcdeB5PMIzOs0YmSnSVZtxD0R9%2BNScGf8A4%2F%2B9m3C6Qg5BJHvamfmOmPBeWpZBYJouiLKchA5%2Bq6XmNoJsl%2BLoo0MBkfIKUyuYiLnb1hPshyhCnlI8c4gz7FK9WTHhb352c%2BS0KnCDo7RuuJK4F10Lgco4MNtiq62kXEVCmDJR6bap1C4ABvHbD15YtauSBY6MsWL9JtHkBGlsD%2BhHTYpOA%2FM0xt9I60fPHVDQBmcuGXFRdAR9nsGXR%2FXNsrD8%2B9l3%2BL7j6mz%2BUeEFHr3%2Bx1Q1GDl%2FN6%2BKV9nsRRisWgbuWVPATvBFQpu4hM%2FvSZ6CvRqhj5m0CAHomf1KO3Q%2BqnG8jA6H998Es3cwTRsB7Oecbjd%2Btg1gxJzfqEEh6mCC250aSt6v30cz7D2iCsGKZPZF0qywXP103T3wa9D%2B%2FsYpJIrR3PzgEzH9MRbBBQYIG7veCIWvXO%2FC3kRnDSuA6bCxGmDT7qaUI5qfhyXgugqiEuaMyXfMPDk3skGOqUBVOPUhFn9MwLgRfK6PEjVEVFdGGBw0Hyp%2B%2FKZIPnMLDCeCvBdkFPt5Udvv2ASTh%2BCuQaR%2BAAFS60eplV57Bsz%2FFX6J1QQplBzs2u7Wg%2Bbdqu6Lf%2FIllfLUdMWBr6kUOUKJpii%2FcpSqF%2Fj5rxUdkFFo%2FNNRDmfMCxcNwMwut8CERJDLNaHvh1iElmlR3acqpBpUp1KZvVuofLo8p0REUrCWL8dehfZ&X-Amz-Signature=ac205ddaf5b392cb8eb7b31207d2635e85ade09f60ce298ad090801486730dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

