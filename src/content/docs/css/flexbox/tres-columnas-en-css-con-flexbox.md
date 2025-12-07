---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC65FMZR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVSiyPcgzEaqHX%2F%2FOC8rCbDZ%2FtUqBZgHuqzLC9mb4l%2FQIhANTpXcatHPg1PZHXILy7PooowHLQCPwJcqkquC%2BB11dHKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbPhnxUM6i8fCEa%2Bsq3AOmQgwUxRlz5CyLJbErMIokVTmKo36YO0YeiFKrwcfsQIqUczG7KeQ5ChHEOD%2BnjvYRj4FofytkLBP9HJS%2FcK%2B%2BUpjEaFeS4lCbGJATIosgc8tOXDGQuU6vBXnCT4oShR6K%2B7%2BERpHIYkDdic0QxisPDoBY6exTZscDanj%2B4RFQji2dNaYQCKHPZ17akxbPtVA77RVb%2Bl4K276cuzg0W14%2FdxxbjzoYzAR%2Fn6vgMJ1UFWC8psbQMMyvGkSoMBi0yqXaF9Bzi7lqRN%2Fp2Irqm2CyLa2PC%2BoGXGOcE5%2FsLr%2FqhixjW%2FjyWoluXnsOurQxXStFxY%2FqQfpDvH3CbTUfdws4qA1iWq1R4Uae%2BI%2BoSXySotZW3OtebTVRUaqiWZqQ8zED7OuN4n%2Bq9HKeqNRMBCDOy0Bc2W%2F7bYQY7vJYTd3fj0jyE%2BZQi5KZ3pnhZ%2FP%2B1ZJexMb7RXsWepzi3ZPOGtCkd3sUb%2FNLle37YK4hXG5MBD3y%2F0KsN2CxnbJI6vsbOjwSTi%2Bk2A%2FhuyaJG9RUzKsCn%2FxXSPsNgzHuABNus9knaBf9bqt5qpjGHs7nhmRDT%2BfZ2oA62qR5TJn1qig28R0rggWNVYPhzcrKOK2BCtM9He7G0PnC9czWbOTPKTDtxtfJBjqkAbZ%2BVoqBo851gEQQSN%2F16WCRd2BIvB7x1qS11letOdQf2RBlJS76%2BVcYFqItE3rxWmjHJH%2BQBvmeIrFWdr6WNiR9y2URbCmMzAs%2FELs9LrTS9rLfV6QXv0xu8AOGyT%2BnEi1Zy1CAxvCelVpjfnEfnyo47bx8ViDoCsr8qgqzkEbVAKg%2FSMOvs4OaJ07TKn9bZ4YJ274Px25ch%2BIvVpUwu3uqYJRt&X-Amz-Signature=ffafed37af4bf7ee9ce4663e3df21101b49a5a0d1b5dbe9aac6bcc4a94cdb877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC65FMZR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVSiyPcgzEaqHX%2F%2FOC8rCbDZ%2FtUqBZgHuqzLC9mb4l%2FQIhANTpXcatHPg1PZHXILy7PooowHLQCPwJcqkquC%2BB11dHKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbPhnxUM6i8fCEa%2Bsq3AOmQgwUxRlz5CyLJbErMIokVTmKo36YO0YeiFKrwcfsQIqUczG7KeQ5ChHEOD%2BnjvYRj4FofytkLBP9HJS%2FcK%2B%2BUpjEaFeS4lCbGJATIosgc8tOXDGQuU6vBXnCT4oShR6K%2B7%2BERpHIYkDdic0QxisPDoBY6exTZscDanj%2B4RFQji2dNaYQCKHPZ17akxbPtVA77RVb%2Bl4K276cuzg0W14%2FdxxbjzoYzAR%2Fn6vgMJ1UFWC8psbQMMyvGkSoMBi0yqXaF9Bzi7lqRN%2Fp2Irqm2CyLa2PC%2BoGXGOcE5%2FsLr%2FqhixjW%2FjyWoluXnsOurQxXStFxY%2FqQfpDvH3CbTUfdws4qA1iWq1R4Uae%2BI%2BoSXySotZW3OtebTVRUaqiWZqQ8zED7OuN4n%2Bq9HKeqNRMBCDOy0Bc2W%2F7bYQY7vJYTd3fj0jyE%2BZQi5KZ3pnhZ%2FP%2B1ZJexMb7RXsWepzi3ZPOGtCkd3sUb%2FNLle37YK4hXG5MBD3y%2F0KsN2CxnbJI6vsbOjwSTi%2Bk2A%2FhuyaJG9RUzKsCn%2FxXSPsNgzHuABNus9knaBf9bqt5qpjGHs7nhmRDT%2BfZ2oA62qR5TJn1qig28R0rggWNVYPhzcrKOK2BCtM9He7G0PnC9czWbOTPKTDtxtfJBjqkAbZ%2BVoqBo851gEQQSN%2F16WCRd2BIvB7x1qS11letOdQf2RBlJS76%2BVcYFqItE3rxWmjHJH%2BQBvmeIrFWdr6WNiR9y2URbCmMzAs%2FELs9LrTS9rLfV6QXv0xu8AOGyT%2BnEi1Zy1CAxvCelVpjfnEfnyo47bx8ViDoCsr8qgqzkEbVAKg%2FSMOvs4OaJ07TKn9bZ4YJ274Px25ch%2BIvVpUwu3uqYJRt&X-Amz-Signature=09633f7f4198a32f819f662c1b5be2c3e99fed4c7a766086fed05bb8499117bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

