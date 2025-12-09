---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGZ72WU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqsfhhq%2F3lHryk2kgPFWeFGp6rgBEl3duES2%2FTJLsPywIgFqiqrTVXPkFEL3py%2FhqtnlGQCj7zIN%2Bbm37ibZSqrucqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfNoO2zWkSulWGPfyrcAxJnDSyuiOPUTjd8kSEgCcffMlCSkqDoyK01U42hoIvEbQcTFEeeuyg%2BwdxZVax6bGrsX9eJSweT16gdIFd4RodxdGzVmGUBAVpBkFukvXSJehXSSHRXB8pPJANe0As5ocqXCRtToDqAxGftV9nRHtaBHe1UlkJI3fkS0J%2BW%2F9urkIpxssTp1APkeCgwlvhErm9wZ2m1SC0bxBhyfxWHPJrxnuZkW8TLSYpcPZu4bMSbZixKrwTRfJOXq1f032bHn6tTATzCtcFkQnejnSpjSJ%2Fm1NtSTjDrLOSXXamesPb9EEbYkQY4gF6cADkbHSIGEUpqP6%2BhGkNrwXndj3YUB5s%2B76wDwoLttSRHwk7NtLqpsYJF%2BRG44UrnI%2BOKN1kjdyax2rivojNm%2FKXAZfiiZrIQAoFKzWh47Hd2ZPcnm4x4%2FU4DxO48cTizW0lh28xuH838ZVM%2FbreW%2FNEQQ%2FCRX%2F38fy1FUFzGMUflNf%2B2WBFzDweYk4Di0xzy%2BifCN5NF05xK5CWn3NZ1hMgrC%2BXpcb0odCUcsEB%2FC8pvVmUktoG%2BYTK9%2FwHDdGBJA8rIe8L4Nf68NorGcrftM34o%2FZ6zrEFsz3Pj5xVw7evkPJlhsKAbBO1tW2SERDWTcI6cMIPK3skGOqUBulPM88dTZx2dKPhlSiFqPsxMxpsq6eB2gQsJD6DmKcwnzKW7BeIEZj40L%2Fi9Uwbc4CrNH%2Fy%2FJjbDj%2Fjlyl46cPANtnUzTuimc7TLBjg%2F%2BfBK3lv5AqlhVjAYoUdzOgti9PgdUf6YPsdj3SRIndz%2BqNzmBv9T2s1EJw0Zv0bLCG%2Bvmd%2BrkQXGUyDEE24qX2Pa7MIXAlyAg3KMTP696sEUsjnjCpgU&X-Amz-Signature=e92b55aec39d90e9b083c403f717e5d1fa3e3659aafd7821de1bbc27a66d2e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGGZ72WU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqsfhhq%2F3lHryk2kgPFWeFGp6rgBEl3duES2%2FTJLsPywIgFqiqrTVXPkFEL3py%2FhqtnlGQCj7zIN%2Bbm37ibZSqrucqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfNoO2zWkSulWGPfyrcAxJnDSyuiOPUTjd8kSEgCcffMlCSkqDoyK01U42hoIvEbQcTFEeeuyg%2BwdxZVax6bGrsX9eJSweT16gdIFd4RodxdGzVmGUBAVpBkFukvXSJehXSSHRXB8pPJANe0As5ocqXCRtToDqAxGftV9nRHtaBHe1UlkJI3fkS0J%2BW%2F9urkIpxssTp1APkeCgwlvhErm9wZ2m1SC0bxBhyfxWHPJrxnuZkW8TLSYpcPZu4bMSbZixKrwTRfJOXq1f032bHn6tTATzCtcFkQnejnSpjSJ%2Fm1NtSTjDrLOSXXamesPb9EEbYkQY4gF6cADkbHSIGEUpqP6%2BhGkNrwXndj3YUB5s%2B76wDwoLttSRHwk7NtLqpsYJF%2BRG44UrnI%2BOKN1kjdyax2rivojNm%2FKXAZfiiZrIQAoFKzWh47Hd2ZPcnm4x4%2FU4DxO48cTizW0lh28xuH838ZVM%2FbreW%2FNEQQ%2FCRX%2F38fy1FUFzGMUflNf%2B2WBFzDweYk4Di0xzy%2BifCN5NF05xK5CWn3NZ1hMgrC%2BXpcb0odCUcsEB%2FC8pvVmUktoG%2BYTK9%2FwHDdGBJA8rIe8L4Nf68NorGcrftM34o%2FZ6zrEFsz3Pj5xVw7evkPJlhsKAbBO1tW2SERDWTcI6cMIPK3skGOqUBulPM88dTZx2dKPhlSiFqPsxMxpsq6eB2gQsJD6DmKcwnzKW7BeIEZj40L%2Fi9Uwbc4CrNH%2Fy%2FJjbDj%2Fjlyl46cPANtnUzTuimc7TLBjg%2F%2BfBK3lv5AqlhVjAYoUdzOgti9PgdUf6YPsdj3SRIndz%2BqNzmBv9T2s1EJw0Zv0bLCG%2Bvmd%2BrkQXGUyDEE24qX2Pa7MIXAlyAg3KMTP696sEUsjnjCpgU&X-Amz-Signature=6f6956f68ec905584c32c93063662733126cddd9a40d073ff6c75e3befdf0e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

