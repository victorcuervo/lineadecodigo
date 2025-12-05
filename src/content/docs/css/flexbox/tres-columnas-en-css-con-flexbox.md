---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBZMA5E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvMOdb3XX%2BEwCgtemcQXOIGd%2Fgp%2FIilTSHcNquQxNp6AiAwCOULaKxG7cW%2B%2F1uz9UuQHCJiatmGIYNicrmI4cth5Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3KHjDbhkmhrW19sIKtwD6hHzpLDpgWKtudV6y8%2Bl6cDhEnVf4hhqqU25G8%2FfTjTKsTUUMmxEdwfa%2Be4Xwy1iOG8egAvUTpy%2Fp%2FdlAs2branjqoJMA2mpy%2FX%2F89xhFnS0a1c%2BHwO3aVjxeGtNR84kuShVC7ZaI3kfArO%2BgUSaPuTBzURsKrxYMfQ3XKWqRKt10rOsxY8WWP3X0yXXdosdwRg1ivEn4UPejqutIYZfz5CFm9yMHv7OTsipf4Qwx9D6PIBSUj2KdP5uWGdKNP%2BEf9c7ClOGnnXJa91b9KKX51z%2FD9UWGn7AJGKLcL22doTdAeLR0NDBGeMW0oUsj9hjnVcAL4lcZlY7nlzA2VLwmIpAWlW%2BhIh0NHOdTtGi5qwWnVtzo5YmAwbb0bfO7xQoOTgs%2BGiOXe8dPiGQDDZLvEwKt20EZledGFi6RHZOdELpeGKTaESCEU7Gr738p5TzaXsHAd1ljFDqP8xyji2GQiaczMWAH3ggvPhQAjwis2A8wXxwhX%2BXycH%2B7opTquwEn7%2FeOwdBjfQySKWw1Tu7NtpPI0FBYpXxyAsmxFO%2BV%2FmaV%2FFF8YPTtDFd0Cr%2BmIViNapPV08jsa5zP6fgtf%2BjLRl6iKGmigHGlo9UFHClUAc5%2BI2lqMksbV0QAHcwzP%2FMyQY6pgHqwClsSyBRkzKDl40%2Fl6Hni%2FG7yRcmbpyuYjSaIxT8A2PYjwOMv9iJYvFa3e%2F3jpEqogj7jTqv8cjkA0yH3SK8e8r1IOjoFGiOhop3B3B6ysr%2F31neIH%2FyaBY7dtjW%2BlmEkBO3lLywWh%2BDfk1P7uvdAE3OpiGC2XLtX1hbAHPXXsNBd95pZzoW8DXHY1G1SyFF24ufxmN%2FSkP7giftCNvi%2BkngAdOS&X-Amz-Signature=7ec4554c2674f92a150d507a02036023c7f502aa77d992039e85e9238a976bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBZMA5E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvMOdb3XX%2BEwCgtemcQXOIGd%2Fgp%2FIilTSHcNquQxNp6AiAwCOULaKxG7cW%2B%2F1uz9UuQHCJiatmGIYNicrmI4cth5Sr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3KHjDbhkmhrW19sIKtwD6hHzpLDpgWKtudV6y8%2Bl6cDhEnVf4hhqqU25G8%2FfTjTKsTUUMmxEdwfa%2Be4Xwy1iOG8egAvUTpy%2Fp%2FdlAs2branjqoJMA2mpy%2FX%2F89xhFnS0a1c%2BHwO3aVjxeGtNR84kuShVC7ZaI3kfArO%2BgUSaPuTBzURsKrxYMfQ3XKWqRKt10rOsxY8WWP3X0yXXdosdwRg1ivEn4UPejqutIYZfz5CFm9yMHv7OTsipf4Qwx9D6PIBSUj2KdP5uWGdKNP%2BEf9c7ClOGnnXJa91b9KKX51z%2FD9UWGn7AJGKLcL22doTdAeLR0NDBGeMW0oUsj9hjnVcAL4lcZlY7nlzA2VLwmIpAWlW%2BhIh0NHOdTtGi5qwWnVtzo5YmAwbb0bfO7xQoOTgs%2BGiOXe8dPiGQDDZLvEwKt20EZledGFi6RHZOdELpeGKTaESCEU7Gr738p5TzaXsHAd1ljFDqP8xyji2GQiaczMWAH3ggvPhQAjwis2A8wXxwhX%2BXycH%2B7opTquwEn7%2FeOwdBjfQySKWw1Tu7NtpPI0FBYpXxyAsmxFO%2BV%2FmaV%2FFF8YPTtDFd0Cr%2BmIViNapPV08jsa5zP6fgtf%2BjLRl6iKGmigHGlo9UFHClUAc5%2BI2lqMksbV0QAHcwzP%2FMyQY6pgHqwClsSyBRkzKDl40%2Fl6Hni%2FG7yRcmbpyuYjSaIxT8A2PYjwOMv9iJYvFa3e%2F3jpEqogj7jTqv8cjkA0yH3SK8e8r1IOjoFGiOhop3B3B6ysr%2F31neIH%2FyaBY7dtjW%2BlmEkBO3lLywWh%2BDfk1P7uvdAE3OpiGC2XLtX1hbAHPXXsNBd95pZzoW8DXHY1G1SyFF24ufxmN%2FSkP7giftCNvi%2BkngAdOS&X-Amz-Signature=bc6944ae0ec2409bf31db254f193dc87027c6a400b1dd21ef2b1c278edbabd50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

