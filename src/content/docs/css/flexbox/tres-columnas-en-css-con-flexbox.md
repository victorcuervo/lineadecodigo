---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MCWOTA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDmtj7BA8BBPPtWx5TaDPrVMfVy%2B6nEEvVPJ3BKL4axwIhAOLqviDFjDq6FuY8VuybU2Nv%2BkWIQE8hKfFXkFROgayKKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFrwXsXN363vhMsH8q3AN2gUWnwM%2F3Z9WTtWG6oKUGuODoKHTNk8efQlvU%2Ffig8uBGL3dlXnHS1FmEYs2V9E7qjC%2FQ85Gb91fg81YkZR67W03%2BO7D7WWjiqzLQVcDlGIaHSs7U8NnyYT%2F%2FKMiDtZoKDyzT2jd3fox5ubPhJdSr5ncqsLYFwdPBESOwVOiaR0ftBOEC%2FGvFVbXDwkq6TvicPstr%2FQ0kq%2FtMr0wTF4zZsbydMrkBmR%2B5w4LsrqC0FD4BO5i%2FT97d17TFp%2FhZgnCYqmgTiwbUKQSNaXaUkWz1E1EfAtdkxELHbagZVI3QUsZXVLSMCH1ei56%2FBS6CDh%2BXAVrC1z8eB8FmWWbaNHnyCnP9rBJRrBpD5WSIpIhQ9U7ZbCpb8ePyKzEKAW7bxQtyyq%2BNV9vrhgXFgi%2Fxs6kl3UI1XSuJC1qRkOIkb6ujhnhmseDcj5f2EY0wCgDkcxKqz3SGjxoVyoyKSnbBOmgaenDZv%2BuLtSk1dQkD1NXoO8RFmXZswEywrlOoUz8kpXARixBZCFOtUgfC0aewvTtE6XZbMLFO0nzj9QcEQO7h4QRbT514kd8qrcyrFGWFQuu8CJBRhuMBbKbRY7tvEhl9cX0sqPl2CaUXCVyCjPlUyQwGhQJvDZvlE40q5jDZod3JBjqkARyrs8il7hGbyDrbdV1DZ8W0oYhJ2QOUFuwkNOVnNVdee%2BIkctP2npyY3rfECcvt3PE6QeZR5bCketjjfIHwJRQ0f77bm65Oc2lPMyvnZ%2F0It3v0Q9E63EzvvLZ6Z5otnCISDpT2XYgkqMUnaTMM4FG9byJPeFBEIsY7sfPqmgxe4tAddcuZspdhB7pp5vvNyS8RyPEYF%2BF2RoEPDI%2Fbj34YBNb8&X-Amz-Signature=06a19ca6819fc7966ec2caf4c7201a67587b64b53c19ca126505cc1cbbe29f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MCWOTA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDmtj7BA8BBPPtWx5TaDPrVMfVy%2B6nEEvVPJ3BKL4axwIhAOLqviDFjDq6FuY8VuybU2Nv%2BkWIQE8hKfFXkFROgayKKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFrwXsXN363vhMsH8q3AN2gUWnwM%2F3Z9WTtWG6oKUGuODoKHTNk8efQlvU%2Ffig8uBGL3dlXnHS1FmEYs2V9E7qjC%2FQ85Gb91fg81YkZR67W03%2BO7D7WWjiqzLQVcDlGIaHSs7U8NnyYT%2F%2FKMiDtZoKDyzT2jd3fox5ubPhJdSr5ncqsLYFwdPBESOwVOiaR0ftBOEC%2FGvFVbXDwkq6TvicPstr%2FQ0kq%2FtMr0wTF4zZsbydMrkBmR%2B5w4LsrqC0FD4BO5i%2FT97d17TFp%2FhZgnCYqmgTiwbUKQSNaXaUkWz1E1EfAtdkxELHbagZVI3QUsZXVLSMCH1ei56%2FBS6CDh%2BXAVrC1z8eB8FmWWbaNHnyCnP9rBJRrBpD5WSIpIhQ9U7ZbCpb8ePyKzEKAW7bxQtyyq%2BNV9vrhgXFgi%2Fxs6kl3UI1XSuJC1qRkOIkb6ujhnhmseDcj5f2EY0wCgDkcxKqz3SGjxoVyoyKSnbBOmgaenDZv%2BuLtSk1dQkD1NXoO8RFmXZswEywrlOoUz8kpXARixBZCFOtUgfC0aewvTtE6XZbMLFO0nzj9QcEQO7h4QRbT514kd8qrcyrFGWFQuu8CJBRhuMBbKbRY7tvEhl9cX0sqPl2CaUXCVyCjPlUyQwGhQJvDZvlE40q5jDZod3JBjqkARyrs8il7hGbyDrbdV1DZ8W0oYhJ2QOUFuwkNOVnNVdee%2BIkctP2npyY3rfECcvt3PE6QeZR5bCketjjfIHwJRQ0f77bm65Oc2lPMyvnZ%2F0It3v0Q9E63EzvvLZ6Z5otnCISDpT2XYgkqMUnaTMM4FG9byJPeFBEIsY7sfPqmgxe4tAddcuZspdhB7pp5vvNyS8RyPEYF%2BF2RoEPDI%2Fbj34YBNb8&X-Amz-Signature=1bfab4b503af94f427935d46486e9fec33014adf017e41a7df8bfca0d97945c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

