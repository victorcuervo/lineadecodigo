---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ZHSOFJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1L7nO3uko3c1pm3u7SoXq2p%2BSyNuCe%2F0yI1OVDjiHjgIgcS9k3qcjn13Hoa1oqDHIcneZ7s70lN7jLPa9jrlJYMMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHJO1e3GzLlw%2FwcCFCrcAxDLm0IHhlETchQ8KWGMGQmhMvcOPII0y%2F%2Fzgu6kwjPRuWKHe3S9tYcC0DL3MaDfD0uQviX71cAdn1swpfUJyLl90YbHPdsFePfdUHQBncimRcjlUpSOR15yQuIVF8NCNHy%2B17mL2rtFpOGj%2FlovxGmAApJH5ZOta7oVJWnMDXCvt3ZkJHcVm8UV0Tc%2BwEAjCeW%2FWc5Zy8NvbgV5gzKi0YkLTGfBJ3cqDw2R%2B426IGC4L%2Bgr6EpdOLyITKn3cvz0b%2BLqmKq7t2ZHKLMCtIdkEQSiJZOpGLtzpYtARgsDqgpq2Jcm9kwosyFJ7Y1qxoMcrDSEOwn2oJAhwomqxCSwdsRj6VcdBeU0g32bvkgg2ydAjIA5v9fUCch7pTdS2bvfT1a%2FXsc8fbu0T4iVwO9YGRYtWWKs5TxU5kuu1%2BSBxskj2JrAChmZ4Abs0ivgtArIElfjW0%2BvjLS5qQOswtW1SEegUGS9rhtdOiGKQVFYQO5qocVGbyCtf%2BCmPqzmD%2FytmSDV8wr3BTWFgJpb7squDtVS6S10K0qlfGmxxRdggv0bm9E1B166r6hsL%2BFCnBH9P%2FOh3OmoxT7VeJUfhaB8Bx8Pjln5PHBl2MKM3O7%2B6Ye4k4svstfHjZ4FzxEdMKiMyMkGOqUB1LV5g8Cpi0zp2sRm3fcneEiBXrAoCsFvrPSwoh9z%2BTPlATDFnLJxc%2FEGJQDZxg1ptSAJ%2BKBxRlqZIn%2FObppzrEiWV6kd2QtkDHkD%2FL9FBl8RYfzGJ9FCYI6NdyI2KGBvBU5QEps7WM%2BSgUJdjLIOgmo2DfocvVZa4D02voLgDYPi6KpM7jWDpMx8WOfve6PRTKNk7%2FP4Tm7U0XtfVO%2BITvCINCY8&X-Amz-Signature=0c151ea4d4a3a81a7a73df6fa752fa7998ded82f8c29f15a251c050c2a16b9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ZHSOFJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1L7nO3uko3c1pm3u7SoXq2p%2BSyNuCe%2F0yI1OVDjiHjgIgcS9k3qcjn13Hoa1oqDHIcneZ7s70lN7jLPa9jrlJYMMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHJO1e3GzLlw%2FwcCFCrcAxDLm0IHhlETchQ8KWGMGQmhMvcOPII0y%2F%2Fzgu6kwjPRuWKHe3S9tYcC0DL3MaDfD0uQviX71cAdn1swpfUJyLl90YbHPdsFePfdUHQBncimRcjlUpSOR15yQuIVF8NCNHy%2B17mL2rtFpOGj%2FlovxGmAApJH5ZOta7oVJWnMDXCvt3ZkJHcVm8UV0Tc%2BwEAjCeW%2FWc5Zy8NvbgV5gzKi0YkLTGfBJ3cqDw2R%2B426IGC4L%2Bgr6EpdOLyITKn3cvz0b%2BLqmKq7t2ZHKLMCtIdkEQSiJZOpGLtzpYtARgsDqgpq2Jcm9kwosyFJ7Y1qxoMcrDSEOwn2oJAhwomqxCSwdsRj6VcdBeU0g32bvkgg2ydAjIA5v9fUCch7pTdS2bvfT1a%2FXsc8fbu0T4iVwO9YGRYtWWKs5TxU5kuu1%2BSBxskj2JrAChmZ4Abs0ivgtArIElfjW0%2BvjLS5qQOswtW1SEegUGS9rhtdOiGKQVFYQO5qocVGbyCtf%2BCmPqzmD%2FytmSDV8wr3BTWFgJpb7squDtVS6S10K0qlfGmxxRdggv0bm9E1B166r6hsL%2BFCnBH9P%2FOh3OmoxT7VeJUfhaB8Bx8Pjln5PHBl2MKM3O7%2B6Ye4k4svstfHjZ4FzxEdMKiMyMkGOqUB1LV5g8Cpi0zp2sRm3fcneEiBXrAoCsFvrPSwoh9z%2BTPlATDFnLJxc%2FEGJQDZxg1ptSAJ%2BKBxRlqZIn%2FObppzrEiWV6kd2QtkDHkD%2FL9FBl8RYfzGJ9FCYI6NdyI2KGBvBU5QEps7WM%2BSgUJdjLIOgmo2DfocvVZa4D02voLgDYPi6KpM7jWDpMx8WOfve6PRTKNk7%2FP4Tm7U0XtfVO%2BITvCINCY8&X-Amz-Signature=57acba293d3fa846106bb1456fa69adc02e8bfba24b73d11d81c46b1f77704d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

