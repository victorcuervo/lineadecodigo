---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJKZOGPD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNBgaeE3bZ1JA12t%2FpMm3Enl7dnEzGUCb96ro5gEFRZQIhAI2szG9WMy2n5Tf4mdA0XUYX34zp8cbScyWXCyaohay6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMMJrNwJols6PrJ%2Boq3APJyutDXHcWFS6zM8BEgTsX6%2FziVa3fF1PT0%2Frvcr2pPmD%2BrlU6x2pwfDhWLWg0x9IeLqWI58THx6yyHKxzn10r%2FOGBjZP7TgRkAJVL6OtjgOoljAj7hVoMjG2k3Nb9GwxtWsz6sr3wySTr4nbaIB334PRtP3%2FBhm5%2BLFxZ%2FrqlPsOm76KhkYD5fCp3Lsf9IoWEKkmhclO6hrWAIjgtKf79WPMp9z8INaOCSDi8wl%2F3ij0SOxiLhsziaXEGk8MaT4FiMhGaHHZU4fl9E9UJi1J%2BBlBkjir9YNE0%2FSioNW9RlHWKByrPWzuhDyjRA%2BDgcT39Ea%2FB3RFT%2B85mkOuq%2FTpESSekiG6KbYcpmM4TOT4CxDSC%2FCawyvDQxso8YdC%2FF9PLDy0QMH5tPXBi%2B6L%2BtfPLrbZG7C9zBPYH0KYjCZukjoJQVfWSKMKjoxbPKmfeYT9Wuf2YvArQ6uYnJ9kZjv1F0ep4c7YvJZvbGDMM%2BPlm8QIy9q4XBs7i%2F1xCQTKBctL3Q6hMUxNbWuNxMSVrysUprdyWr%2F5TgzaszEWemALQ%2FEOMQTvC9Atb5pksS3I4hzP8N%2Fb30%2Fh3%2FrItY1tFlAHNTCmatMVAwSk6TnkeWPk%2BdE53eQFPkdinQR2AtTC8vtbJBjqkAZupmzlhnV9zCdbntDBwshRsv7dx%2BCIzgBCs07%2FFM8OiUNQVQSFpoWcrwf96zBHWx%2Fj63Ty1iwmt9xrnc2zoqSLjxsmbP6Psb%2FbAyPg%2FGFzATH1tOo01EVpG73YjZP4JzyS2wLXDFosJolgS75Jz7ENwO0ciD0ayuCixvkJH04g2EX7h1N%2Flu5zJvr%2BLkciyTfAzYVjSlrDlkyt9iA%2BDW%2Flys9KW&X-Amz-Signature=bef2c687376fa0cf1839ab11ae025984438e59e344b035f2bef5f7b6104e7d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJKZOGPD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNBgaeE3bZ1JA12t%2FpMm3Enl7dnEzGUCb96ro5gEFRZQIhAI2szG9WMy2n5Tf4mdA0XUYX34zp8cbScyWXCyaohay6KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMMJrNwJols6PrJ%2Boq3APJyutDXHcWFS6zM8BEgTsX6%2FziVa3fF1PT0%2Frvcr2pPmD%2BrlU6x2pwfDhWLWg0x9IeLqWI58THx6yyHKxzn10r%2FOGBjZP7TgRkAJVL6OtjgOoljAj7hVoMjG2k3Nb9GwxtWsz6sr3wySTr4nbaIB334PRtP3%2FBhm5%2BLFxZ%2FrqlPsOm76KhkYD5fCp3Lsf9IoWEKkmhclO6hrWAIjgtKf79WPMp9z8INaOCSDi8wl%2F3ij0SOxiLhsziaXEGk8MaT4FiMhGaHHZU4fl9E9UJi1J%2BBlBkjir9YNE0%2FSioNW9RlHWKByrPWzuhDyjRA%2BDgcT39Ea%2FB3RFT%2B85mkOuq%2FTpESSekiG6KbYcpmM4TOT4CxDSC%2FCawyvDQxso8YdC%2FF9PLDy0QMH5tPXBi%2B6L%2BtfPLrbZG7C9zBPYH0KYjCZukjoJQVfWSKMKjoxbPKmfeYT9Wuf2YvArQ6uYnJ9kZjv1F0ep4c7YvJZvbGDMM%2BPlm8QIy9q4XBs7i%2F1xCQTKBctL3Q6hMUxNbWuNxMSVrysUprdyWr%2F5TgzaszEWemALQ%2FEOMQTvC9Atb5pksS3I4hzP8N%2Fb30%2Fh3%2FrItY1tFlAHNTCmatMVAwSk6TnkeWPk%2BdE53eQFPkdinQR2AtTC8vtbJBjqkAZupmzlhnV9zCdbntDBwshRsv7dx%2BCIzgBCs07%2FFM8OiUNQVQSFpoWcrwf96zBHWx%2Fj63Ty1iwmt9xrnc2zoqSLjxsmbP6Psb%2FbAyPg%2FGFzATH1tOo01EVpG73YjZP4JzyS2wLXDFosJolgS75Jz7ENwO0ciD0ayuCixvkJH04g2EX7h1N%2Flu5zJvr%2BLkciyTfAzYVjSlrDlkyt9iA%2BDW%2Flys9KW&X-Amz-Signature=e68acf3e799694caf12fe2256b662d6e280d4e99e3bfb7159456344e69c201f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

