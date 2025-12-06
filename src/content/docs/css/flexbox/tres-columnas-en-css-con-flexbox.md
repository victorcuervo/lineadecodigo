---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJOW33%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemtSZX4Ccy6lUa%2B5qlAX%2BYg44I9KfIP7%2FCl7l9WLdhAIhANSavSLl8aYSEQvTwbL7tMyk4RppULe%2BjMXEVhJ9K%2FRpKv8DCHoQABoMNjM3NDIzMTgzODA1IgxSMOGgv3XZqJ6nNqYq3AMOZiaPlJfgfEfvyWcwxJmAlQuOYkSEAagXN59PMTK2aOtV%2Bw7L%2FTAnto%2FWId18sBwuH7dC%2FoqNF74%2FMts7Uwo2bCAYP%2FvSDNC5egnu874zUClnteN4EwD9tjnJtkC%2FoHuY1MvRaaTXh8SHzYb%2BKbmbhAngcSCVfwfkEPCVmYOhaDon6GQXqRbaJe5wBWZqX8Z8iAI9n5DDRWiSJA%2BOeh3Qm%2FlhgMtslzWDeen3%2F83r2slJ9%2BFqflVGtUX7mwAnaeLF1jJrO7dB12E6KIz2XTFRWiYQo9hZYg13VwCrQ3W6ugKHMyHmxFrueit8LqokFtha97p4HGGoFNU7TOjsdxc4tM6%2BJ9FSoH99zy600HxX2q7%2Fe0mZ5GFH5NUtGLZiC58iZWmGJNHdhEMgMeUwxGqb%2FXeH6zk%2BAd5buRsJw5pptzcZwOZQNcAXll9WDNpzFaZiiJUMK8yhoirIjFUCrQwBK%2Fn2sLzaeTK660Xdf6%2FtNWnakm55d5%2FAKtVe9g8mPd%2F2lKMEoklAOjBSybn47oW9orBoHUSnRnb%2BHIzM%2Bx%2FFpQL%2BjNaNIQW2UMptiZn2ZapauKwDBrplZcF9ZbDlYK%2BDqfcB2rYhOgIn9TFccTzr0z8v4EWeOnijrehNzDCOxtHJBjqkAS5h25i0t4oXAeXI%2BpshcOSgjytjl0dpO7ITwjmP18bQHBk57a%2FpkxW2jbzJ51ry77LN%2F%2F3kGCVtXKlJXxXhpCpBV40MeSlFJEa2dbxrdOsit4JtxpbMQGmoNf%2FTQCOHKWPmSh2BNnEHyx9NRqu%2FanLu%2F7418Z4WDJcTHRHTEYXZyraMdUr1nieLVYon%2B5wK97pr8Kf50iWZ2w%2BE%2FPLhR69SIyej&X-Amz-Signature=73d9e908216f01c417590f382b4daa690d23193fba6b24fb67eb63c42eda0bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2KJOW33%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDemtSZX4Ccy6lUa%2B5qlAX%2BYg44I9KfIP7%2FCl7l9WLdhAIhANSavSLl8aYSEQvTwbL7tMyk4RppULe%2BjMXEVhJ9K%2FRpKv8DCHoQABoMNjM3NDIzMTgzODA1IgxSMOGgv3XZqJ6nNqYq3AMOZiaPlJfgfEfvyWcwxJmAlQuOYkSEAagXN59PMTK2aOtV%2Bw7L%2FTAnto%2FWId18sBwuH7dC%2FoqNF74%2FMts7Uwo2bCAYP%2FvSDNC5egnu874zUClnteN4EwD9tjnJtkC%2FoHuY1MvRaaTXh8SHzYb%2BKbmbhAngcSCVfwfkEPCVmYOhaDon6GQXqRbaJe5wBWZqX8Z8iAI9n5DDRWiSJA%2BOeh3Qm%2FlhgMtslzWDeen3%2F83r2slJ9%2BFqflVGtUX7mwAnaeLF1jJrO7dB12E6KIz2XTFRWiYQo9hZYg13VwCrQ3W6ugKHMyHmxFrueit8LqokFtha97p4HGGoFNU7TOjsdxc4tM6%2BJ9FSoH99zy600HxX2q7%2Fe0mZ5GFH5NUtGLZiC58iZWmGJNHdhEMgMeUwxGqb%2FXeH6zk%2BAd5buRsJw5pptzcZwOZQNcAXll9WDNpzFaZiiJUMK8yhoirIjFUCrQwBK%2Fn2sLzaeTK660Xdf6%2FtNWnakm55d5%2FAKtVe9g8mPd%2F2lKMEoklAOjBSybn47oW9orBoHUSnRnb%2BHIzM%2Bx%2FFpQL%2BjNaNIQW2UMptiZn2ZapauKwDBrplZcF9ZbDlYK%2BDqfcB2rYhOgIn9TFccTzr0z8v4EWeOnijrehNzDCOxtHJBjqkAS5h25i0t4oXAeXI%2BpshcOSgjytjl0dpO7ITwjmP18bQHBk57a%2FpkxW2jbzJ51ry77LN%2F%2F3kGCVtXKlJXxXhpCpBV40MeSlFJEa2dbxrdOsit4JtxpbMQGmoNf%2FTQCOHKWPmSh2BNnEHyx9NRqu%2FanLu%2F7418Z4WDJcTHRHTEYXZyraMdUr1nieLVYon%2B5wK97pr8Kf50iWZ2w%2BE%2FPLhR69SIyej&X-Amz-Signature=46f8399982a8e496274347b64dd015ce90762251c830d6f45752e41e996f1bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

