---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R727BKIX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBO%2FETSSBqx9787hXOjojrs6vvvkvVLuIxj6u26ASp4nAiBWiZt0NGsE5bk%2BSre8Yvww8qPnsPy0X4RMdPC09zUwHCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMSLX0wtCjVjT2DesoKtwDZDUrDtOFr6fbU1Ia%2FqPU%2FopPZD1%2BThNHp2K8KGqkI%2Fti9vG4GIqRu4hkVt1aqMLScpd8kk1KZElQIFr5IOIme3UazwnGqI6HkKxlpUJKcHZkwfqBlOyldqMZ49b6bv9s9fLpqc9EFvWih9XoZzxhr3ckicYYISOAjGQDrvJ0oIAuzz7SQW1UebhEusfH79c4UQhhoaIr7fhbLCbitUZmY%2FigBGLmQKtTKVmYsErPAd7sq%2FzXBtSvdGffXgfSJYSRUHmurHc%2FTqZwpYJN2m%2FBA%2B%2FzTAne4h86PgKJ2MlH3EwtEafmd2j3gya8zJLPikL2e0mQXIw4w14IICf7pEpQXMKMtrw1o6lMSgIE0Evc5t4DKZI4nBBdZ%2FMJlZ9Rxq2J1dzCxEe6wqmkR30iI0UOAWLlyStJsaKxG%2FVINswbxW2bgFqqkogNdq178Om23f5QAD9Q0jlix6m7B5Tofgx%2Ba2FenLrfnIj4zPMKHLKJIRhTSRZ3739KZ87RbG2FRKjNW0FWpTg7rBVbLK8ZDBRuhmo%2Br5TVrPaX%2F3RfrSbZIMIXZqs4FaFqNXkJwe3aLVm0PzSCdVSZtpKa5DpOq6TyrlY%2FzJeV%2Fr1fWCpfbVVaJaOVKA057Ot8ZWdnmBIw1Ja%2ByQY6pgE6UpW0spFRLvemVR8ogVj%2FzinpSLWqsBGTiB5hGQnBTZsqKQJz8Uxp3C%2F73KAZhzKzuv184Rd686aSeCJoQWZE4aO6rrBAHc8a7JF2bd93fTP3y%2BUiF0C3vHGSpHRVm8tsL%2F17XuIMrQbA%2BHNIx3A6TIWplYSpzDBbJLxFwXY5lnbsEcOmF9gIOJnQoYBfuyt4UIf4LVdAROZT1uXepS62S6%2BZMuhP&X-Amz-Signature=4b09795134aa33be557a5f0f1e19d2101e18c48ecd17681c8bfd60ad40c125d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R727BKIX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBO%2FETSSBqx9787hXOjojrs6vvvkvVLuIxj6u26ASp4nAiBWiZt0NGsE5bk%2BSre8Yvww8qPnsPy0X4RMdPC09zUwHCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMSLX0wtCjVjT2DesoKtwDZDUrDtOFr6fbU1Ia%2FqPU%2FopPZD1%2BThNHp2K8KGqkI%2Fti9vG4GIqRu4hkVt1aqMLScpd8kk1KZElQIFr5IOIme3UazwnGqI6HkKxlpUJKcHZkwfqBlOyldqMZ49b6bv9s9fLpqc9EFvWih9XoZzxhr3ckicYYISOAjGQDrvJ0oIAuzz7SQW1UebhEusfH79c4UQhhoaIr7fhbLCbitUZmY%2FigBGLmQKtTKVmYsErPAd7sq%2FzXBtSvdGffXgfSJYSRUHmurHc%2FTqZwpYJN2m%2FBA%2B%2FzTAne4h86PgKJ2MlH3EwtEafmd2j3gya8zJLPikL2e0mQXIw4w14IICf7pEpQXMKMtrw1o6lMSgIE0Evc5t4DKZI4nBBdZ%2FMJlZ9Rxq2J1dzCxEe6wqmkR30iI0UOAWLlyStJsaKxG%2FVINswbxW2bgFqqkogNdq178Om23f5QAD9Q0jlix6m7B5Tofgx%2Ba2FenLrfnIj4zPMKHLKJIRhTSRZ3739KZ87RbG2FRKjNW0FWpTg7rBVbLK8ZDBRuhmo%2Br5TVrPaX%2F3RfrSbZIMIXZqs4FaFqNXkJwe3aLVm0PzSCdVSZtpKa5DpOq6TyrlY%2FzJeV%2Fr1fWCpfbVVaJaOVKA057Ot8ZWdnmBIw1Ja%2ByQY6pgE6UpW0spFRLvemVR8ogVj%2FzinpSLWqsBGTiB5hGQnBTZsqKQJz8Uxp3C%2F73KAZhzKzuv184Rd686aSeCJoQWZE4aO6rrBAHc8a7JF2bd93fTP3y%2BUiF0C3vHGSpHRVm8tsL%2F17XuIMrQbA%2BHNIx3A6TIWplYSpzDBbJLxFwXY5lnbsEcOmF9gIOJnQoYBfuyt4UIf4LVdAROZT1uXepS62S6%2BZMuhP&X-Amz-Signature=ae369dec07e6ca251ccb8a4767429dcfad338be790ca7b17914078d4f0c841de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

