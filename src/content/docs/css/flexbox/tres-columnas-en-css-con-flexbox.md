---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLITWFYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBUbDD1ocNkAb0iYYC2M6G7bRW8gfuQENTaiOu9oS%2F%2FKAiA70s1ziAJCv%2Fh%2B35N1k%2B7tOScN9QBWnfhxSyRh6YHkjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPDzxbd%2FNC8mLJhgfKtwDkEcnULuKIxtof7dJ2yEspjfZOQcdXePn%2FfiSaZOLGUycD%2FA6f%2BLL%2FCuFnBrDIBFc7plbUoRymXCPkoE%2B2wKMCWzSvLOK5PMS8CiVUeuBpg2TTHLRix2ox45RNPRSPPKumZHGmmZq9mrOi2N9wIfwvtWfHjH6JfY8NpLGgfGt%2FHyhmfdNyDzq3nVLd3ssGxrFLEYsUfExdNRIfXP1Hm5iHpT7S6stHwc2E%2FsiixSJ6ee19Js24XYOCrNn2ACWaOyPqdfUr%2BM8UvItLkCL8jy%2BCJ26%2FvYOAgnFW3IevgE8opUeg3bXungizjS5jbgV7OSyvYhbZNFlFb9c5Zsj4SfAFhBnh9jKHtPwE8chT%2BFxIhxt4U8hjYxjKKFoPVdm2VN363q5N7KakViJrILpsxq%2BhDCw0qc%2BDenJ1GaiYM%2FxeK3ZeY38%2B1kcN5hREVleXD%2BPTd8OIXETvRZvAqnBJuBwiRHqL2CbINySip0rqgOeML13PioiXP1eZ07KFFzJsiHuTiU7rKtu773RdSFJaWyq92vAVbH41gGtqNFybnBqurV1mZ91%2BU%2BEHLWZ7jXXJE5JNkPxFbuyW3TXR2Sy4fF8GyEdv6TVIAR4NLta2dv4062JoWw84CsptECTXDkwipDEyQY6pgE4Mcw6epbPPElkpLMHYveEzbtvPg1QiF%2Fyjbsk2OmShUwIPuD77ytfg5LErDuPkX7DwqGUraSV%2BAZqNN8S8YEBOlAJ8VcGMKpx8NKT6zprgrtvmlnbIRZYvB3L5%2B0Wz89qUvaNXOpoZ6%2FflHhSDxPd1SvgMJjkqwJStZSd87jWY%2B48A1TDZEaaY1eI%2B54SzlgfsUpUTc56Iv0YQaXnPQ%2BRThpo5Fk4&X-Amz-Signature=a8dc4c2a41678192624472b0b127b1df573263f9aff93d6594e7a4e9ba05d0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLITWFYI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBUbDD1ocNkAb0iYYC2M6G7bRW8gfuQENTaiOu9oS%2F%2FKAiA70s1ziAJCv%2Fh%2B35N1k%2B7tOScN9QBWnfhxSyRh6YHkjCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPDzxbd%2FNC8mLJhgfKtwDkEcnULuKIxtof7dJ2yEspjfZOQcdXePn%2FfiSaZOLGUycD%2FA6f%2BLL%2FCuFnBrDIBFc7plbUoRymXCPkoE%2B2wKMCWzSvLOK5PMS8CiVUeuBpg2TTHLRix2ox45RNPRSPPKumZHGmmZq9mrOi2N9wIfwvtWfHjH6JfY8NpLGgfGt%2FHyhmfdNyDzq3nVLd3ssGxrFLEYsUfExdNRIfXP1Hm5iHpT7S6stHwc2E%2FsiixSJ6ee19Js24XYOCrNn2ACWaOyPqdfUr%2BM8UvItLkCL8jy%2BCJ26%2FvYOAgnFW3IevgE8opUeg3bXungizjS5jbgV7OSyvYhbZNFlFb9c5Zsj4SfAFhBnh9jKHtPwE8chT%2BFxIhxt4U8hjYxjKKFoPVdm2VN363q5N7KakViJrILpsxq%2BhDCw0qc%2BDenJ1GaiYM%2FxeK3ZeY38%2B1kcN5hREVleXD%2BPTd8OIXETvRZvAqnBJuBwiRHqL2CbINySip0rqgOeML13PioiXP1eZ07KFFzJsiHuTiU7rKtu773RdSFJaWyq92vAVbH41gGtqNFybnBqurV1mZ91%2BU%2BEHLWZ7jXXJE5JNkPxFbuyW3TXR2Sy4fF8GyEdv6TVIAR4NLta2dv4062JoWw84CsptECTXDkwipDEyQY6pgE4Mcw6epbPPElkpLMHYveEzbtvPg1QiF%2Fyjbsk2OmShUwIPuD77ytfg5LErDuPkX7DwqGUraSV%2BAZqNN8S8YEBOlAJ8VcGMKpx8NKT6zprgrtvmlnbIRZYvB3L5%2B0Wz89qUvaNXOpoZ6%2FflHhSDxPd1SvgMJjkqwJStZSd87jWY%2B48A1TDZEaaY1eI%2B54SzlgfsUpUTc56Iv0YQaXnPQ%2BRThpo5Fk4&X-Amz-Signature=77ac8f0c7af27d84abd0b71b43697977706fe1a34e1ed02b461fa4f1fce8836d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

