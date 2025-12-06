---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C5KFOI4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh4duv3zZ1ag8Gow3q101GcCcuXDSquyC2JjC6FachrgIhAOzlvB0ifI1gKPhZX07e4F%2BhytrOHwftmg5A95ubVL%2FlKv8DCH8QABoMNjM3NDIzMTgzODA1IgyAdz06VhBCCsXPNrUq3AO3wbdZ96B0ZlIBILIAFTSuy3bCbg13TGZWiarWR4e1anoKmKSpChPOoSFudn%2BKRh4zVm1FKax1KSQgBRS0oCdLuVbzzxc52aWyXn%2F0%2FhgM5kD4RnxfGGBHWr8GL14wfM0GSNmIkkvk0MwEYsaPfrnV1cyr6yrNgAp%2BKNg2QTukrqvpq%2BgFfbowLyyIhChylK6boQ47AHnfLROsXDnkZ71tbRAtBIXxFAedWn4Y9xviceSVSnAluxUjqGdAzrGoOMjOuG1LxZbUpbW8U3RAoS8Eu7wqijEIdM8Ea3maMVAfjpU0MRD4hDefUtbQM0YHrSqJrxAawdR%2FEBP31HRJ28HuUuCWxuPbOdm7e5qqVM2M66CzDA72xEjcYjN0kJxYcM2xcv8wAjgYYtIFihEQS0NpRy0WicbY9oS7jgnhmwR8k%2FrU72yguJSsHtFQR2rKGk5suQ8o2C8gYGcYHabfGv5YSbfvwfI4jIrdVm6NgvTnU1hxdVboHwdIDVeSES1s9205mnj8WvzqDxKZTSjksJldBjIb6lAwT33uXpe0DWLdBs8VNlgXRgbEtmv3oWs4EqTykrZr5dmJCFgavcJQ7k4riLWpdbqYCZjwkW8M33JuZCPltim92UOzko4vWjCA09LJBjqkAc3RxqrBq3lqs40ILsh4t1zzvS9n1yrr3gdCACadKDUAyL%2BLDlUZ8GU0f2ixbpFmjZ%2BeS3D4vlc5JxwnzC%2FtrkQiBJ0KPbJvfX7WR9D39pcToAGSl16L%2FQ%2B3agqziilsN5XK1cNZBJRHWBw7L6lSink1LurGXo%2BNra2qhG7N32f58MSh%2BeOKR5mgd5qu8lU%2BxNJheIEGNHmpY53e5sSyZEPHC0rf&X-Amz-Signature=2165232fb3e22256727c1a4e9444aac63ee63c475d934abe75d2df51941b8480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C5KFOI4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh4duv3zZ1ag8Gow3q101GcCcuXDSquyC2JjC6FachrgIhAOzlvB0ifI1gKPhZX07e4F%2BhytrOHwftmg5A95ubVL%2FlKv8DCH8QABoMNjM3NDIzMTgzODA1IgyAdz06VhBCCsXPNrUq3AO3wbdZ96B0ZlIBILIAFTSuy3bCbg13TGZWiarWR4e1anoKmKSpChPOoSFudn%2BKRh4zVm1FKax1KSQgBRS0oCdLuVbzzxc52aWyXn%2F0%2FhgM5kD4RnxfGGBHWr8GL14wfM0GSNmIkkvk0MwEYsaPfrnV1cyr6yrNgAp%2BKNg2QTukrqvpq%2BgFfbowLyyIhChylK6boQ47AHnfLROsXDnkZ71tbRAtBIXxFAedWn4Y9xviceSVSnAluxUjqGdAzrGoOMjOuG1LxZbUpbW8U3RAoS8Eu7wqijEIdM8Ea3maMVAfjpU0MRD4hDefUtbQM0YHrSqJrxAawdR%2FEBP31HRJ28HuUuCWxuPbOdm7e5qqVM2M66CzDA72xEjcYjN0kJxYcM2xcv8wAjgYYtIFihEQS0NpRy0WicbY9oS7jgnhmwR8k%2FrU72yguJSsHtFQR2rKGk5suQ8o2C8gYGcYHabfGv5YSbfvwfI4jIrdVm6NgvTnU1hxdVboHwdIDVeSES1s9205mnj8WvzqDxKZTSjksJldBjIb6lAwT33uXpe0DWLdBs8VNlgXRgbEtmv3oWs4EqTykrZr5dmJCFgavcJQ7k4riLWpdbqYCZjwkW8M33JuZCPltim92UOzko4vWjCA09LJBjqkAc3RxqrBq3lqs40ILsh4t1zzvS9n1yrr3gdCACadKDUAyL%2BLDlUZ8GU0f2ixbpFmjZ%2BeS3D4vlc5JxwnzC%2FtrkQiBJ0KPbJvfX7WR9D39pcToAGSl16L%2FQ%2B3agqziilsN5XK1cNZBJRHWBw7L6lSink1LurGXo%2BNra2qhG7N32f58MSh%2BeOKR5mgd5qu8lU%2BxNJheIEGNHmpY53e5sSyZEPHC0rf&X-Amz-Signature=12140372087e1f300f0632adb4591b864909db755f3e0285b422a72bd7eba46b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

