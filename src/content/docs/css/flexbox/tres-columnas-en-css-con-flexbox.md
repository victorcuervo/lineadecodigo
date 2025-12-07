---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4I7LY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQj%2FRpNnDkKhh1b1SuRWteTYsJVii2TDobYEQAh%2B3DqAiA%2BROm4nVDER%2BGqPKu7KGC0HOeWpwNvObBvSywogZSXQyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCIRXnB3%2BRv0jEZJIKtwDD1APdBsAL3crZBPBoo1H9NJjTprOTJf%2BpUkn%2Ffq11Oq3bmBbJvXp3UbAQzzUGTzOdKosbc1FARF%2BovO07e%2BITazA6m1w8FpXhb%2B%2FDVUbb%2F78Vb0NNsjw6o81KH7beahC38xXOyldbmBCvjLroK99kTk%2BWVY%2FrJOnALKnT1ErBtl8DROWgySCnT5btlt%2Bf6tH7%2Bd0NS5bgKEWBWR0YrmLpkIPSLJVTc%2Fho%2BzZF76hEHunFbzuWWnz6N%2Bk%2Fa2BplaI2zR4o13VR7Guow7AEwfAvQmAKYxHF7f53nTRMr3V3%2BRf%2FfiN2ojGUzhHYMZeaXuiW3Aky%2FQeVwyNEYNWifDReh2MLybJ2zxIO%2Bw1VDO8n3%2BfhXa77Tc8RSHPwJd2Pk%2Fq0cRH6Sjhf6pRcIM3kEDWylHpAvQed6zjHuZrF6o3LZhsMYsqZz8TcwrGiZkKJAW7CfOYZAwYWUK8z1hv%2BOTqO3GlSoOo4y2jxBK%2B6WQqV32%2FQd%2FtSL4Nt1PxuGP9ftCK0721y7NRMaJs3M6j3q1kkR%2F8m0xjZ9rZ7dPLrzb3UkmXVA5PROKxJVakxDTZsEbEw%2Fm6kA87dHqiSZkpziDJ%2BppjKS5KoHoAar7azXnSfneLl5Gmb3pa6vJdnrIwmf3SyQY6pgFYCp41zb7rfJ4KHxvcunyVfZZAq7t997Fv7euJf5270BSPO8cGUkdR7F5cyyBRJovnRjDhWpvOeG6c2xX%2BZQrP889DQy9Z3avQmucO0VZlIUnvoNk87cyhUlQMPlnd491ID5ocOWz4KiFYw021qzQY4faI39Fed12bA11Af7UW6vcchNbPUpIWt3qj2uj8rrV0uwW%2Bi3XGYt1k59TtDmc4pw%2FQOG5z&X-Amz-Signature=3d67d501139b517ad71ecc3fbb95bf5123ca72b5449a1cd1e14e14d38fa13070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4I7LY4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQj%2FRpNnDkKhh1b1SuRWteTYsJVii2TDobYEQAh%2B3DqAiA%2BROm4nVDER%2BGqPKu7KGC0HOeWpwNvObBvSywogZSXQyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCIRXnB3%2BRv0jEZJIKtwDD1APdBsAL3crZBPBoo1H9NJjTprOTJf%2BpUkn%2Ffq11Oq3bmBbJvXp3UbAQzzUGTzOdKosbc1FARF%2BovO07e%2BITazA6m1w8FpXhb%2B%2FDVUbb%2F78Vb0NNsjw6o81KH7beahC38xXOyldbmBCvjLroK99kTk%2BWVY%2FrJOnALKnT1ErBtl8DROWgySCnT5btlt%2Bf6tH7%2Bd0NS5bgKEWBWR0YrmLpkIPSLJVTc%2Fho%2BzZF76hEHunFbzuWWnz6N%2Bk%2Fa2BplaI2zR4o13VR7Guow7AEwfAvQmAKYxHF7f53nTRMr3V3%2BRf%2FfiN2ojGUzhHYMZeaXuiW3Aky%2FQeVwyNEYNWifDReh2MLybJ2zxIO%2Bw1VDO8n3%2BfhXa77Tc8RSHPwJd2Pk%2Fq0cRH6Sjhf6pRcIM3kEDWylHpAvQed6zjHuZrF6o3LZhsMYsqZz8TcwrGiZkKJAW7CfOYZAwYWUK8z1hv%2BOTqO3GlSoOo4y2jxBK%2B6WQqV32%2FQd%2FtSL4Nt1PxuGP9ftCK0721y7NRMaJs3M6j3q1kkR%2F8m0xjZ9rZ7dPLrzb3UkmXVA5PROKxJVakxDTZsEbEw%2Fm6kA87dHqiSZkpziDJ%2BppjKS5KoHoAar7azXnSfneLl5Gmb3pa6vJdnrIwmf3SyQY6pgFYCp41zb7rfJ4KHxvcunyVfZZAq7t997Fv7euJf5270BSPO8cGUkdR7F5cyyBRJovnRjDhWpvOeG6c2xX%2BZQrP889DQy9Z3avQmucO0VZlIUnvoNk87cyhUlQMPlnd491ID5ocOWz4KiFYw021qzQY4faI39Fed12bA11Af7UW6vcchNbPUpIWt3qj2uj8rrV0uwW%2Bi3XGYt1k59TtDmc4pw%2FQOG5z&X-Amz-Signature=6eb28d68337e1d122b686125a23f47e61b20127316327fe5b09fd6255539e948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

