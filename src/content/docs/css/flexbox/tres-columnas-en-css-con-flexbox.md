---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI5E6TG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDmDlzm5Oq3pUc1uAskHQ9mZ5Epd%2FfZiaoHDswx8Ovs3wIgWNhep8kqLBahvaxNk59dEcm00YduYgwYwX65469WtJYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKndU%2B9aqHvHXytSTyrcA%2BNW9Wl2aAzjDM4BxZPAkNWxGtzSQYhPAoxgR7rTpIsIefVc1RebtlL%2FcBfQTdyc6kWMmRnOjiNLF1CY43mlFV%2B%2Bl8H7Kd9m4jH6A31bBIFyjeN4dP9aaatETLPWaGCJybayVtrndE0xppZJ30zHjTEWIdomWimlwjHIuQCDo9jlExaOG66rE72QU%2FwwBpFER94Lp7awkjrdy20s6U0Yx8uy25H9PAlEWBopSXrc4nPhgBEoqp5l26tgidisH%2BLfWNhUgvhbohN0hXRfFU0YPVgTtAYwiJILOb70wOsAUVwgFWN9%2FgUoirO8fNfqY0Hxa1rjLCzRBAmz1wd6bqhcBmb4eAxkdCj3pLD91sN3kYJfZBkIQy50m4r7LVW06gI%2F%2B6vdn7hAeUYWCvQM%2BJxCAg8EBGb4brNHZSw8OILfCP6P71QPvle8k0p2vAYK88LHGJxEczT%2BvNit6Wj2xCP4OSK1m3ookd6RBF36U0JVABM3uwlC89B9rHEdS4CPIhF2EsSX%2FtUXw0Z0KEKNC9NMxnAYBZK1g5ntKVSyhXN9fG8pKZtnO8TnN83Y8JJafRv5Hq3YbYCe1ja05H5Zz6v5%2BHiFAxAkZj1Q22mzzR3YMIK%2BAf7ESKTDEdK%2F3rgWMOi%2BxskGOqUBryYmBWb1zIn7zBOCkxXoso4Zz3BZd6fg0u8ihcl0R6mrwJR2aW4XVC8mBl7U%2BYJUL2TAO%2FmvsK%2FZuSthVXq9ync91VNGmB7DJg2gPHj4GC0WR6Jyfnhro7cwfN9UArqHCVaysZoNCQhAv8Ifc1jV8Ak%2FaaUwVExIvbI50VZwo6taY2gsk8fn9U5Io1A%2BbFnVyGXvLcySWzB%2BwG0nZE5%2Bsqa1P3fx&X-Amz-Signature=b9c36af5221c4b183906547783e0d858be2ea6f1792d41b646a481641cd447a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WI5E6TG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDmDlzm5Oq3pUc1uAskHQ9mZ5Epd%2FfZiaoHDswx8Ovs3wIgWNhep8kqLBahvaxNk59dEcm00YduYgwYwX65469WtJYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKndU%2B9aqHvHXytSTyrcA%2BNW9Wl2aAzjDM4BxZPAkNWxGtzSQYhPAoxgR7rTpIsIefVc1RebtlL%2FcBfQTdyc6kWMmRnOjiNLF1CY43mlFV%2B%2Bl8H7Kd9m4jH6A31bBIFyjeN4dP9aaatETLPWaGCJybayVtrndE0xppZJ30zHjTEWIdomWimlwjHIuQCDo9jlExaOG66rE72QU%2FwwBpFER94Lp7awkjrdy20s6U0Yx8uy25H9PAlEWBopSXrc4nPhgBEoqp5l26tgidisH%2BLfWNhUgvhbohN0hXRfFU0YPVgTtAYwiJILOb70wOsAUVwgFWN9%2FgUoirO8fNfqY0Hxa1rjLCzRBAmz1wd6bqhcBmb4eAxkdCj3pLD91sN3kYJfZBkIQy50m4r7LVW06gI%2F%2B6vdn7hAeUYWCvQM%2BJxCAg8EBGb4brNHZSw8OILfCP6P71QPvle8k0p2vAYK88LHGJxEczT%2BvNit6Wj2xCP4OSK1m3ookd6RBF36U0JVABM3uwlC89B9rHEdS4CPIhF2EsSX%2FtUXw0Z0KEKNC9NMxnAYBZK1g5ntKVSyhXN9fG8pKZtnO8TnN83Y8JJafRv5Hq3YbYCe1ja05H5Zz6v5%2BHiFAxAkZj1Q22mzzR3YMIK%2BAf7ESKTDEdK%2F3rgWMOi%2BxskGOqUBryYmBWb1zIn7zBOCkxXoso4Zz3BZd6fg0u8ihcl0R6mrwJR2aW4XVC8mBl7U%2BYJUL2TAO%2FmvsK%2FZuSthVXq9ync91VNGmB7DJg2gPHj4GC0WR6Jyfnhro7cwfN9UArqHCVaysZoNCQhAv8Ifc1jV8Ak%2FaaUwVExIvbI50VZwo6taY2gsk8fn9U5Io1A%2BbFnVyGXvLcySWzB%2BwG0nZE5%2Bsqa1P3fx&X-Amz-Signature=997e49da75f77c5978b0f376f55c6387ee1f11c7b397539ff43fa8a2efa3268a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

