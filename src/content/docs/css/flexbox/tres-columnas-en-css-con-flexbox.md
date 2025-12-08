---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GC33DY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrFuvXkhgxd1ynHIZRE3QRgBTZwwmYGc%2FlvLa%2F6L5EngIgXuHSzqOaM0OBuoNHK%2FwwM6%2Fs%2BQYeaHLTEU7RZNO7khMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEeDk5KbB6IV7WQ9SrcA0reBC9wEL6yCqC0y1%2BaxSQcKn0RD6dyqbkDPzpnIvA7sz8A16gVVoDCC77phayz020H%2Fc%2BArgw4wVFYug7Y2Zi5%2B5dSahrz2H0XW4GtDkv%2B09eHgkeNszbF4q92hxYtBktT%2Fz346rZKnVnSBC45WHRXeSyJK2ZLiJkcIVsQEs6IXMfrWh5kyvmciTuJ%2Fikd1O87b5%2FfT%2BIm9CEXuPHPg1pUk3EiPAg%2BH8DrfYTHQq%2F4Rm6q0eHRRPn%2FNqF25OXapOTK6CoeSuYGstzOEOqQSyqjiN2KBNLu3GM%2FJb9OR7crTHZ9xb5xYg3TfBAYyRP%2FihcDtlqXOZrNulmZTXZ77S0%2BCAurm5SqrQM05m8y30zyuVMKPNGmH57hWo6aJAKkePdlf0k9Y5JlVmMZIuS9AgJutM5CyxlkCt%2BIC%2BD7CJRUfAPD30gb3Q3aky4GoZipoj%2FYZtnT1pH%2Ft6PKzlcyMxdzWvkmw%2BVBBdZ0ttE%2FdGtINVjnQ%2FcfL%2BC20nohfRw3VI%2BhPLEE8Sb%2FnkHs5mTJldNbEltIV%2BlhjVrhEahzaCIb%2BEuZzQKVlK4LPvu2y4OsW6%2BBgoy%2F4gWyWgU9VB%2Frj4HsUamyKQe9fqZSknTJl0S2anROx4voAd2xLOz7MN%2Fk28kGOqUBa6%2B1gvhSkZsGYtpxw0b0eEoZE9UZP3aKOo9L1iy%2FfCno%2BbtXF6QiyEVs0y56kGhGPJ8p91mANR0UAgrFy60pfHkqj4PPmHA0IpQJE8lGtOe%2F6x%2B2g47Heq8zcYEM9BdBfroamYrCpnScWEIOw2BouE4uR%2BcIUrJa84O%2FQZ0pKmdwkOGv7N7n%2FtgreOTlGIqu2iTY47yW%2BWJ5uHCRo%2BBXUtdC9TUl&X-Amz-Signature=246fa4bdc54cf7e10a2f4426bae70a418639b893621fae023ed9094f398ad925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676GC33DY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrFuvXkhgxd1ynHIZRE3QRgBTZwwmYGc%2FlvLa%2F6L5EngIgXuHSzqOaM0OBuoNHK%2FwwM6%2Fs%2BQYeaHLTEU7RZNO7khMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEeDk5KbB6IV7WQ9SrcA0reBC9wEL6yCqC0y1%2BaxSQcKn0RD6dyqbkDPzpnIvA7sz8A16gVVoDCC77phayz020H%2Fc%2BArgw4wVFYug7Y2Zi5%2B5dSahrz2H0XW4GtDkv%2B09eHgkeNszbF4q92hxYtBktT%2Fz346rZKnVnSBC45WHRXeSyJK2ZLiJkcIVsQEs6IXMfrWh5kyvmciTuJ%2Fikd1O87b5%2FfT%2BIm9CEXuPHPg1pUk3EiPAg%2BH8DrfYTHQq%2F4Rm6q0eHRRPn%2FNqF25OXapOTK6CoeSuYGstzOEOqQSyqjiN2KBNLu3GM%2FJb9OR7crTHZ9xb5xYg3TfBAYyRP%2FihcDtlqXOZrNulmZTXZ77S0%2BCAurm5SqrQM05m8y30zyuVMKPNGmH57hWo6aJAKkePdlf0k9Y5JlVmMZIuS9AgJutM5CyxlkCt%2BIC%2BD7CJRUfAPD30gb3Q3aky4GoZipoj%2FYZtnT1pH%2Ft6PKzlcyMxdzWvkmw%2BVBBdZ0ttE%2FdGtINVjnQ%2FcfL%2BC20nohfRw3VI%2BhPLEE8Sb%2FnkHs5mTJldNbEltIV%2BlhjVrhEahzaCIb%2BEuZzQKVlK4LPvu2y4OsW6%2BBgoy%2F4gWyWgU9VB%2Frj4HsUamyKQe9fqZSknTJl0S2anROx4voAd2xLOz7MN%2Fk28kGOqUBa6%2B1gvhSkZsGYtpxw0b0eEoZE9UZP3aKOo9L1iy%2FfCno%2BbtXF6QiyEVs0y56kGhGPJ8p91mANR0UAgrFy60pfHkqj4PPmHA0IpQJE8lGtOe%2F6x%2B2g47Heq8zcYEM9BdBfroamYrCpnScWEIOw2BouE4uR%2BcIUrJa84O%2FQZ0pKmdwkOGv7N7n%2FtgreOTlGIqu2iTY47yW%2BWJ5uHCRo%2BBXUtdC9TUl&X-Amz-Signature=e076ab72f6b88fef13249c7ebb1f2926096d556e9a55a68e7943eeb19166e1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

