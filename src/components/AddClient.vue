<template>
  <div class="container">
    <h2 class="title">Карточка клиента</h2>
    <form class="form" @submit.prevent="checkForm">
      <div class="form-group wrapper">
        <div class="form-row mb-1">
          <div class="col">
            <label for="lastName">Фамилия*</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              :class="$v.form.lastName.$error ? 'is-invalid' : ''"
              v-model.trim="form.lastName"
            >
            <small v-if="$v.form.lastName.$dirty && !$v.form.lastName.required">Обязательное поле</small>
          </div>
          <div class="col">
            <label for="firstName">Имя*</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              :class="$v.form.firstName.$error ? 'is-invalid' : ''"
              v-model.trim="form.firstName"
            >
            <small v-if="$v.form.firstName.$dirty && !$v.form.firstName.required">Обязательное поле</small>
          </div>
          <div class="col">
            <label for="patronymic">Отчество*</label>
            <input
              type="text"
              class="form-control"
              id="patronymic"
              :class="$v.form.firstName.$error ? 'is-invalid' : ''"
              v-model.trim="form.patronymic"
            >
            <small v-if="$v.form.patronymic.$dirty && !$v.form.patronymic.required">Обязательное поле</small>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <label for="birthDate">Дата рождения*</label>
            <input
              type="date"
              class="form-control"
              id="birthDate"
              :class="$v.form.birthDate.$error ? 'is-invalid' : ''"
              v-model.trim="form.birthDate"
            >
            <small v-if="$v.form.birthDate.$dirty && !$v.form.birthDate.required">Обязательное поле</small>
          </div>
          <div class="col">
            <label for="phoneNumber">Номер телефона*</label>
            <input
              type="tel"
              class="form-control"
              id="phoneNumber"
              placeholder="7 999 888 77 66"
              :class="$v.form.phone.$error ? 'is-invalid' : ''"
              v-model.trim="form.phone"
            >
            <small v-if="$v.form.phone.$dirty && !$v.form.phone.required">Обязательное поле</small>
            <small v-else-if="$v.form.phone.$dirty && !$v.form.phone.telCheck">Формат: 7 999 888 77 66</small>
          </div>
          <div class="col">
            <label for="gender">Пол</label>
            <select class="form-control"
                    id="gender" v-model="form.gender">
              <option
                v-for="(sex, index) in gender"
                :key="index"
                :value="sex.value"
              > {{sex.label}}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-group wrapper">
        <div class="form-row mb-1">
          <div class="col">
            <label for="country">Страна</label>
            <input
              type="text"
              class="form-control"
              id="country"
              v-model.trim="form.address.country"
            >
          </div>
          <div class="col">
            <label for="country">Область</label>
            <input
              type="text"
              class="form-control"
              id="region"
              v-model.trim="form.address.region"
            >
          </div>
          <div class="col">
            <label for="city">Город*</label>
            <input
              type="text"
              class="form-control"
              id="city"
              :class="$v.form.address.city.$error ? 'is-invalid' : ''"
              v-model.trim="form.address.city"
            >
            <small v-if="$v.form.address.city.$dirty && !$v.form.address.city.required">Обязательное поле</small>
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <label for="street">Улица</label>
            <input
              type="text"
              class="form-control"
              id="street"
              v-model.trim="form.address.street"
            >
          </div>
          <div class="col">
            <label for="houseNumber">Дом</label>
            <input
              type="text"
              class="form-control"
              id="houseNumber"
              v-model.trim="form.address.houseNumber"
            >
          </div>
          <div class="col">
            <label for="index">Индекс</label>
            <input
              type="text"
              class="form-control"
              id="index"
              v-model.trim="form.address.index"
            >
          </div>
        </div>
      </div>

      <div class="form-group wrapper">
        <div class="form-row mb-1">
          <div class="col">
            <label for="documentType">Тип документа*</label>
            <select class="form-control"
                    id="documentType"
                    v-model="form.document.type"
                    :class="$v.form.document.type.$error ? 'is-invalid' : ''"
            >
              <option
                v-for="(document, index) in documents"
                :key="index"
                :value="document.value"
              > {{document.label}}
              </option>
            </select>
            <small v-if="$v.form.document.type.$dirty && !$v.form.document.type.required">Обязательное поле</small>
          </div>
          <div class="col">
            <label for="documentSeries">Серия</label>
            <input
              type="text"
              class="form-control"
              id="documentSeries"
              v-model.trim="form.document.series"
            >
          </div>
          <div class="col">
            <label for="documentNumber">Номер</label>
            <input
              type="text"
              class="form-control"
              id="documentNumber"
              v-model.trim="form.document.number"
            >
          </div>
        </div>
        <div class="form-row">
          <div class="col">
            <label for="documentOrganisation">Кем выдан</label>
            <input
              type="text"
              class="form-control"
              id="documentOrganisation"
              v-model.trim="form.document.organisation"
            >
          </div>
          <div class="col">
            <label for="documentDate">Дата выдачи*</label>
            <input
              type="date"
              class="form-control"
              id="documentDate"
              :class="$v.form.document.date.$error ? 'is-invalid' : ''"
              v-model.trim="form.document.date"
            >
            <small v-if="$v.form.document.date.$dirty && !$v.form.document.date.required">Обязательное поле</small>
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <label for="clientGroup">Группа клиентов*</label>
            <select
              multiple
              class="form-control"
              id="clientGroup"
              v-model="form.groups"
              :class="$v.form.groups.$error ? 'is-invalid' : ''"
            >
              <option
                v-for="(group, index) in groups"
                :key="index"
                :value="group.value"
              > {{group.label}}
              </option>
            </select>
            <small v-if="$v.form.groups.$dirty && !$v.form.groups.required">Обязательное поле</small>
          </div>
          <div class="col">
            <label for="doctor">Лечащий врач</label>
            <select class="form-control"
                    id="doctor" v-model="form.doctor">
              <option
                v-for="(doctor, index) in doctors"
                :key="index"
                :value="doctor.value"
              > {{doctor.label}}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="agreeWithSendSMS" v-model="form.prohibitionToSendSMS">
        <label class="form-check-label"
               for="agreeWithSendSMS">Не отправлять СМС</label>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Создать клиента</button>
    </form>
  </div>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  export default {
    mixins: [validationMixin],
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          patronymic: '',
          birthDate: '',
          phone: '',
          gender: '',
          groups: [],
          doctor: '',
          document: {
            type: '',
            series: '',
            number: '',
            organisation: '',
            date: ''
          },
          address: {
            country: '',
            region: '',
            city: '',
            street: '',
            houseNumber: '',
            index: ''
          },
          prohibitionToSendSMS: false,
        },
        submitted: {
          firstName: '',
          lastName: '',
          patronymic: '',
          birthDate: '',
          phone: '',
          gender: '',
          groups: [],
          doctor: '',
          document: {
            type: '',
            series: '',
            number: '',
            organisation: '',
            date: ''
          },
          address: {
            country: '',
            region: '',
            city: '',
            street: '',
            houseNumber: '',
            index: ''
          },
          prohibitionToSendSMS: false,
        },
        gender: [
          {
            label: 'Мужчина',
            value: 'male'
          },
          {
            label: 'Женщина',
            value: 'female'
          },
        ],
        groups: [
          {
            label: 'VIP',
            value: 'vip'
          },
          {
            label: 'Проблемные',
            value: 'problematic'
          },
          {
            label: 'ОМС',
            value: 'obligatory'
          }
        ],
        doctors: [
          {
            label: 'Иванов',
            value: 'Ivanov'
          },
          {
            label: 'Захаров',
            value: 'Zakharov'
          },
          {
            label: 'Чернышева',
            value: 'Chernisheva'
          },
        ],
        documents: [
          {
            label: 'Паспорт',
            value: 'passport'
          },
          {
            label: 'Свидетельство о рождении',
            value: 'birthCertificate'
          },
          {
            label: 'Водительское удостоверение',
            value: 'driverLicense'
          },
        ],
      }
    },
    validations: {
      form: {
        firstName: {
          required
        },
        lastName: {
          required
        },
        patronymic: {
          required
        },
        birthDate: {
          required
        },
        phone: {
          required,
          telCheck(value){
            const tel = value.replace(/[^+\d]/g, '')
            return tel.length === 11 && tel[0] === '7'
          }
        },
        groups: {
          required
        },
        address: {
          city: {
            required
          }
        },
        document: {
          type: {
            required
          },
          date: {
            required
          }
        }
      }
    },
    methods: {

      checkForm(){
        this.$v.form.$touch()
        if (!this.$v.form.$error){
          this.$alert("", 'Клиент создан', 'success')
          this.submitted.firstName = this.form.firstName
          this.submitted.lastName = this.form.lastName
          this.submitted.patronymic = this.form.patronymic
          this.submitted.birthDate = this.form.birthDate
          this.submitted.phone = this.form.phone
          this.submitted.gender = this.form.gender
          this.submitted.groups = this.form.groups
          this.submitted.doctor = this.form.doctor
          this.submitted.document.type = this.form.document.type
          this.submitted.document.series = this.form.document.series
          this.submitted.document.number = this.form.document.number
          this.submitted.document.organisation = this.form.document.organisation
          this.submitted.document.date = this.form.document.date
          this.submitted.address.country = this.form.address.country
          this.submitted.address.region = this.form.address.region
          this.submitted.address.city = this.form.address.city
          this.submitted.address.street = this.form.address.street
          this.submitted.address.houseNumber = this.form.address.houseNumber
          this.submitted.address.index = this.form.address.index
          this.submitted.prohibitionToSendSMS = this.form.prohibitionToSendSMS

          this.form.firstName = ''
          this.form.lastName = ''
          this.form.patronymic = ''
          this.form.birthDate = ''
          this.form.phone = ''
          this.form.gender = ''
          this.form.groups = []
          this.form.doctor = ''
          this.form.document.type = ''
          this.form.document.series = ''
          this.form.document.number = ''
          this.form.document.organisation = ''
          this.form.document.date = ''
          this.form.address.country = ''
          this.form.address.region = ''
          this.form.address.city = ''
          this.form.address.street = ''
          this.form.address.houseNumber = ''
          this.form.address.index = ''
          this.form.prohibitionToSendSMS = ''

          this.$v.$reset()
        }
      }
    }
  }
</script>

<style scoped>
  .container{
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
    background: #fff;
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .wrapper{
    margin-bottom: 2rem;
  }
  .form-control{
    margin-bottom: .3rem;
  }
  label{
    margin-bottom: .2rem;
  }
  @media screen and (max-width: 900px) {
    .container{
      box-shadow: none;
    }
  }

  @media screen and (max-width: 600px) {
    .container{
      margin: 20px 0;
      padding: 0 30px;
    }
    .col{
      flex-basis: auto;
    }
  }
</style>