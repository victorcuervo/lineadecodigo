---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLLHYKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZFH8RV6kyNaInS8a5XVrDnSPCKye0MZvHL0368BeOwIhAMNopSAbdeuzZuXwHgdDvYWEmtfufAQ1SdMtMi4XsqzqKv8DCGAQABoMNjM3NDIzMTgzODA1IgzbKg8URf7JpFEQEM0q3ANEBw%2BpGFpd9qyS%2BvOu8RdGb40qm%2F9g6ssTwq5mbCvGoiyT89v1jGBAGrL6%2FTSXC2u6Jc9OzL%2Fo9azLFER%2FiV4%2Fvo2Hbo%2F2ij3XD1RtkEk%2F2cmSph81Rwm3cGctPdzswsSLAYoTrwGJYXpP9t7dwrZ5im8Ee%2F7BRBk7816%2BNCc9mptF%2B9JNEPMFvmE%2F8uqgTWQxq0uDwTomih73SFnTOK3Yl23aSRI1XJwE0jxojia1ij3rNEpayZ4LS57WOS403C5U3WAmB5gjD2wr4aZjfp7WNa%2FvInaPtTDzPRu71XIpGW%2FWVY1izAEVCwLATCp2M9atQ%2FbSOv1DaJt58xipqvfjqXn5eC5Isre0v0arsm5Uh26v4FThvuv%2BZFtx5xfcAnx1Y%2BxsfIaKJg8u8Raxj5Hv9pl5ILh6jHRIL1EjtUl0q3C%2Fj%2B5glY2cBdzf7cDZ2pTC2MTBESmAjwDSukng%2Btu5C1F5oUELvQRSq4Cf4z7eXfSt%2Fq5pNW8L37ImI6fsHueyavrj04TaydDrHZp%2FKVTg00n3YiyVzWerTHfROlGcIII0rZRu9fiT4S%2BxgTipe74t8vi2dZpY9Pzh57P7JULqlTe0Nhfhcs7BL2NtT%2BSAPUYvZe1LvPaXn6RvdTDl6svJBjqkAcNa2r0V4HoNkaRk2ty9OBhxjTWVIOhhi9JjJ7CNQEYcJ4UNFYV3%2Fu7X%2FvEjB89yiAMvXh25q405nnxxN31j3Ldtea36MlyFhmQJRdIPAiyMCVi5qCVoDvO7y8H%2Bnzd22d3hIOPHw7r2Z%2Bj9628duOiZdCQEQpR%2B%2FJOvofg0sTfF3lCIYTKx0BPr1hDotyYzZI4wtr7zdBRovyzlmguzD%2BdYYzxb&X-Amz-Signature=dc4d7b7249d105d7c23408f77f1a601dfb04f5b6bdd3466fbbadab21832645c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXLLHYKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEZFH8RV6kyNaInS8a5XVrDnSPCKye0MZvHL0368BeOwIhAMNopSAbdeuzZuXwHgdDvYWEmtfufAQ1SdMtMi4XsqzqKv8DCGAQABoMNjM3NDIzMTgzODA1IgzbKg8URf7JpFEQEM0q3ANEBw%2BpGFpd9qyS%2BvOu8RdGb40qm%2F9g6ssTwq5mbCvGoiyT89v1jGBAGrL6%2FTSXC2u6Jc9OzL%2Fo9azLFER%2FiV4%2Fvo2Hbo%2F2ij3XD1RtkEk%2F2cmSph81Rwm3cGctPdzswsSLAYoTrwGJYXpP9t7dwrZ5im8Ee%2F7BRBk7816%2BNCc9mptF%2B9JNEPMFvmE%2F8uqgTWQxq0uDwTomih73SFnTOK3Yl23aSRI1XJwE0jxojia1ij3rNEpayZ4LS57WOS403C5U3WAmB5gjD2wr4aZjfp7WNa%2FvInaPtTDzPRu71XIpGW%2FWVY1izAEVCwLATCp2M9atQ%2FbSOv1DaJt58xipqvfjqXn5eC5Isre0v0arsm5Uh26v4FThvuv%2BZFtx5xfcAnx1Y%2BxsfIaKJg8u8Raxj5Hv9pl5ILh6jHRIL1EjtUl0q3C%2Fj%2B5glY2cBdzf7cDZ2pTC2MTBESmAjwDSukng%2Btu5C1F5oUELvQRSq4Cf4z7eXfSt%2Fq5pNW8L37ImI6fsHueyavrj04TaydDrHZp%2FKVTg00n3YiyVzWerTHfROlGcIII0rZRu9fiT4S%2BxgTipe74t8vi2dZpY9Pzh57P7JULqlTe0Nhfhcs7BL2NtT%2BSAPUYvZe1LvPaXn6RvdTDl6svJBjqkAcNa2r0V4HoNkaRk2ty9OBhxjTWVIOhhi9JjJ7CNQEYcJ4UNFYV3%2Fu7X%2FvEjB89yiAMvXh25q405nnxxN31j3Ldtea36MlyFhmQJRdIPAiyMCVi5qCVoDvO7y8H%2Bnzd22d3hIOPHw7r2Z%2Bj9628duOiZdCQEQpR%2B%2FJOvofg0sTfF3lCIYTKx0BPr1hDotyYzZI4wtr7zdBRovyzlmguzD%2BdYYzxb&X-Amz-Signature=a13f6dc715bcc9ee86044930efa25365c388add82b4c23f2f9b0b64d75c07e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

